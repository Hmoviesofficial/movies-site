const moviesContainer = document.getElementById("movies");
const searchBox = document.getElementById("searchBox");

// Load movies from function
async function loadMovies() {
  const res = await fetch("/.netlify/functions/movies");
  const data = await res.json();
  showMovies(data.results);
}

// Show movies
function showMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
      <p>${movie.title}</p>
      <p>This is a trending movie. Watch trailer and explore more.</p>
    `;

    div.addEventListener("click", () => {
      const query = encodeURIComponent(movie.title + " trailer");
      window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
    });

    moviesContainer.appendChild(div);
  });
}

// Search (optional simple)
searchBox.addEventListener("input", () => {
  const value = searchBox.value.toLowerCase();
  document.querySelectorAll(".movie").forEach(movie => {
    movie.style.display = movie.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});

loadMovies();
