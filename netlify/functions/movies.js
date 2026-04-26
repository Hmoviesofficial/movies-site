exports.handler = async function () {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f409489a42d61f514484fa959f76fec7"
    );

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch movies" }),
    };
  }
};
