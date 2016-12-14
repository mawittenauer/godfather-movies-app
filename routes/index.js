exports.home = function(req, res) {
  res.render('home');
};

exports.movie_page = function(req, res) {
  var movie_number = req.params.movie_number;
  
  res.send('This is the page for The Godfather Part ' + movie_number);
};

exports.not_found = function(req, res) {
  res.send('This page was not found');
};
