const express = require('express'),
      bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());






app.listen(3001, function() {
  console.log('listening on 3001!')
})