const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const sparqlquery = `
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
      SELECT ?cho ?title ?img ?description WHERE {
      ?cho dc:description ?description .
      ?cho dc:title ?title .
      ?cho foaf:depiction ?img .
      FILTER (CONTAINS(?description , "Monument"))
    }`;
    // more fun dc:types: 'affiche', 'japonstof', 'tegel', 'herenkostuum'
    // more fun dc:subjects with Poster.: 'Privacy.', 'Pop music.', 'Music.', 'Squatters movement.'

const encodedquery = encodeURIComponent(sparqlquery);
const queryurl = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/endpoint/sparql?default-graph-uri=&query=' + encodedquery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on';


let data
var results = [];

fetch(queryurl)
  .then(res => res.json())
  .then(result => {
    data = result.results.bindings


    // for (i = 0, n = data.length; i < n; i++) {
    //     var item = results[i];
    //     results[ item.title + " - " + item.artist ] = item;
    // }


      //
      // for(let i = 0; i < data.length; i++) {
    	// 	results.push(data[i]);
    	// }
      // // raceKeys = raceKeys.filter((d, i, self) => i === self.indexOf(d));
      // results = results.filter((d, i, self) => i === self.indexOf(d));

    console.log(results)
    })

  .catch(err => console.log(err))



/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Verloren gebouwen van Amsterdam',
    data: data
  });
});

router.get('/detail/:id', (req, res) =>{
  var cleanData = data.filter(function(item){
    if(req.params.id === item.title.value){
      return true;
    }
    return false;
  })
    res.render('detail', {
      data: cleanData[0]
    })
})

module.exports = router;
