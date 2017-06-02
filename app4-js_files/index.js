const express = require('express'),
      bodyParser = require('body-parser'),
      data = require('./data.js')

//variables

const app = express(),
      port = 3000

//middleware

app.use(bodyParser.json())


//endpoints

app.get('/api/data', function(req, res) {
  res.status(200).json({
    statusCode: 'ok',
    data: data
  })
})

app.post('/api/data', function(req, res) {
  let item = req.body
  data.push(item)
  res.status(200).send('ok')
})

//listen

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})