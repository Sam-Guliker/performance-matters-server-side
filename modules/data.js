const express = require('express');
const router = express.Router();

const fetch = require('node-fetch')
const url = 'http://dennistel.nl/movies/'

let data

const fetchData = fetch(url)
  .then(res => res.json())
  .then(result => {
    return result
  })
  .catch(err => console.log(err))


console.log(fetchData)
module.exports = data;
