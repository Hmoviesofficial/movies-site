const movies = [
  {
    title: "Apex",
    img: "https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    trailer: "https://www.youtube.com/watch?v=2M1g8H7q3J0"
  },
  {
    title: "Michael",
    img: "https://image.tmdb.org/t/p/w500/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
    trailer: "https://www.youtube.com/watch?v=0V9X5xR1X4E"
  },
  {
    title: "Project Hail Mary",
    img: "https://via.placeholder.com/300x200?text=Hail+Mary",
    trailer: "https://www.youtube.com/results?search_query=project+hail+mary+trailer"
  }
];

const moviesContainer = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.classList.add("movie");

  div.innerHTML = `
    <img src="${movie.img}" />
    <p>${movie.title}</p>
  `;

  // 🔥 CLICK → OPEN TRAILER
  div.addEventListener("click", () => {
    window.open(movie.trailer, "_blank");
  });

  moviesContainer.appendChild(div);
});
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {
  const value = searchBox.value.toLowerCase();
  const movieDivs = document.querySelectorAll(".movie");

  movieDivs.forEach(div => {
    const title = div.innerText.toLowerCase();
    div.style.display = title.includes(value) ? "block" : "none";
  });
});
