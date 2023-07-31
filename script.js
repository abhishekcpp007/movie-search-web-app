const apiKey = 'e3160033'; // Replace this with your actual OMDB API key

function searchMovie() {
  const input = document.getElementById('searchInput').value.trim();

  if (input === '') {
    alert('Please enter a movie title.');
    return;
  }

  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(input)}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === 'False') {
        alert('Movie not found. Please enter a valid movie title.');
      } else {
        displayMovieDetails(data);
      }
    })
    .catch((error) => {
      console.error('Error fetching movie data:', error);
      alert('An error occurred while fetching movie data. Please try again later.');
    });
}

function displayMovieDetails(movieData) {
  const movieDetailsDiv = document.getElementById('movieDetails');
  movieDetailsDiv.innerHTML = '';

  const titleElement = document.createElement('h2');
  titleElement.textContent = movieData.Title;
  movieDetailsDiv.appendChild(titleElement);

  const posterElement = document.createElement('img');
  posterElement.src = movieData.Poster;
  posterElement.alt = `${movieData.Title} Poster`;
  movieDetailsDiv.appendChild(posterElement);
}
