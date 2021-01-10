const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const fs = require('fs')
const Promise = require('bluebird')
const compression = require('compression')
const db = require('../db/index.js');
const findRsvpAndUpdate = require('../db/controllers/findlogin.js');

app.use(compression())
app.use('/', express.static('public'))
app.use('/api/homes/:id/', express.static('public'))
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  findRsvpAndUpdate(req.body, (err, success) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      console.log(success)
      res.sendStatus(200)
    }
  });

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})