//global variables to store arrays
var genreMovies = [];
var currentMovie;
var faves = [];

function selectMovie(){
  var selected = document.getElementById('genres').value;
  //alert(selected);

  genreMovies = [];
  //push selected movies into the genreMovies array
  for(let i in Movies){
      if(Movies[i].genre == selected){
        genreMovies.push(Movies[i]);
      }
}
//alert(genreMovies);
}

function displayMovie(){
  var movieInfo = document.getElementById('movieInfo');
  movieInfo.removeAttribute('hidden');

  //getting a random movie from the movie object
  let rand = Math.floor(Math.random() * genreMovies.length);
  //alert(rand);

  var movie = genreMovies[rand];
  currentMovie = movie;

  //alert(movie.name);
  //display movie name, poster, year and summary
  let title = movie.name;
  let year = movie.year;
  let summary = movie.summary;
  let poster = movie.poster;
  var movieTitle = document.getElementById('movieTitle');
  movieTitle.innerHTML = title + '(' + year + ')';

  var movieSummary = document.getElementById('movieText');
  movieSummary.innerHTML = summary;

  var moviePoster = document.getElementById('moviePoster').src = poster;
  moviePoster.alt = title;

  var divButtons = document.getElementById('fdbtns');
  divButtons.removeAttribute('hidden');
}

//save the movie
function saveMovie(){
  faves.push(currentMovie.name);
  alert(currentMovie.name + " was added to favourites");
  //alert(faves);
  console.log(faves);
  var favTitle = document.getElementById("fTParent");
  favTitle.removeAttribute('hidden');
  var favDiv = document.getElementById("movieFaves");
  favDiv.removeAttribute('hidden');
  favDiv.innerHTML = faves.join(", ");
  
}

