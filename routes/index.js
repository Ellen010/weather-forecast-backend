var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const City = require('../models/cities');

module.exports = router;

router.post('/weather', (req, res) => {
    if (!weather.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
      const newCity = {
        cityName: req.body.cityName,
        description: req.body.description,
        tempMin: req.body.tempMin,
        tempMax: req.body.tempMax,
      };
   
      weather.push(newCity);
      res.json({ result: true, weather: newCity });
    } else {
      res.json({ result: false, error: 'City already saved' });
    }
   });
   router.get('/weather/:cityName', (req, res) => {
    const searchedWeather = weather.find(e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase());
    if (searchedWeather) {
      res.json({ result: true, weather: searchedWeather });
    } else {
      res.json({ result: false, error: 'City not found' });
    }
   });