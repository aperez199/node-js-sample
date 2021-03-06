var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

var text1 = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(text1.toString('utf-8'))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
