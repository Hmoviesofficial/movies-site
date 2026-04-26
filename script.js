async function getMovies() {
  const res = await fetch("/.netlify/functions/movies");
  const data = await res.json();

  const moviesContainer = document.getElementById("movies");

  moviesContainer.innerHTML = data.results
    .map(
      (movie) => `
    <div>
      <h3>${movie.title}</h3>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" width="150"/>
    </div>
  `
    )
    .join("");
}

getMovies();
