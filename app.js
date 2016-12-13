var express = require('express');
var app = express();

var routes = require('./routes');

app.get('/', routes.home);

app.get('/part/:movie_number?', routes.movie_page);

app.get('*', routes.not_found);

app.listen(8080, function(){
  console.log("App listening on port 8080");
});
