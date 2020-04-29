const express = require('express');
const request = require('request');

const app = express();


app.get('/', (req, res) => {
    res.send('HOME');
});
app.get('/covidData', (req, res) => {
    request.get({ url: "https://api.covid19india.org/raw_data1.json" }, function (e, r, body) {
        res.json(JSON.parse(body))
    })

});

app.listen(3000, () => {
    console.log('Running server on port 3000');
})