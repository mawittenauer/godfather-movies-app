var moviesJSON = require('../movies.json');

exports.home = function(req, res) {
  var movies = moviesJSON.movies;
  
  res.render('home', {
    title: "The Godfather",
    movies: movies
  });
};

exports.movie_page = function(req, res) {
  var movie_number = req.params.movie_number;
  
  var movies = moviesJSON.movies;
  
  if(movie_number <= movies.length && movie_number > 0) {
  
    var movie = movies[movie_number - 1];
  
    res.render('templates/single_movie', {
      title: movie.title,
      movie: movie,
      movies: movies
    });
  } else {
    res.render('not_found', {
      title: 'Page Not Found'
    })
  }
};

exports.not_found = function(req, res) {
  var movies = moviesJSON.movies;
  res.render('not_found', {
    title: 'Page Not Found',
    movies: movies
  });
};
