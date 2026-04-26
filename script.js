fetch("/.netlify/functions/movies")
.then(res => res.json())
.then(data => {
    showMovies(data.results);
    setHero(data.results[0]);
});