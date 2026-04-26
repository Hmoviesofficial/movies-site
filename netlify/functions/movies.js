exports.handler = async function () {
  const API_KEY = process.env.TMDB_KEY;

  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
