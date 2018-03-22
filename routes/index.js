const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const url = 'http://dennistel.nl/movies/'

let data

fetch(url)
  .then(res => res.json())
  .then(result => {
    data = result
  })
  .catch(err => console.log(err))


/* GET home page. */
router.get('/', (req, res) => {
  console.log(data)
  res.render('index', {
    data: data,
    title: 'Sam'
  });
});

router.get('/detail/:id', (req, res) =>{
    res.render('detail', {
      data: data,
      title: 'Testing out'
    })
})

module.exports = router;
