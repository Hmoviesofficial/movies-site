const container = document.querySelector(".movies"); // apna div class check kar lena

async function loadMovies() {
  try {
    const res = await fetch("/.netlify/functions/movies");
    const data = await res.json();

    container.innerHTML = "";

    data.results.forEach(movie => {
      const div = document.createElement("div");
      div.classList.add("movie");

      div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
        <h3>${movie.title}</h3>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    console.log("Error:", err);
  }
}

loadMovies();
