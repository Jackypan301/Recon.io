const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const fs = require('fs')
const Promise = require('bluebird')
const Property = require("../db/models/property.js")
const compression = require('compression')

app.use(compression())
app.use('/', express.static('public'))
app.use('/api/homes/:id/', express.static('public'))
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/homes/:id/reviews', (req, res) => {
  Property.findOne((req.params.id), (err,data) => {
    if (err) {
      console.log(req.params.id)
      res.send(err)
    } else {
      console.log(data)
      res.header("Content-Type",'application/json').send(JSON.stringify(data, 0, 2))
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})