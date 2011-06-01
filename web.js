var express = require('express');
var app = express.createServer(express.logger());
var path = require('path');
var jade = require('jade');
// app.set('view engine', 'jade'); // Set jade as default render engine
var everyone = require('now').initialize(app);

app.configure(function(){
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.set('view options');
});


app.get('/', function(request, response) {
  everyone.now.msg = "Hello World!";
  response.render('index', {
      locals: {some: 'Locals'}
  });
});

var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);
