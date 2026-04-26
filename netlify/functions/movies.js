exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      results: [
        { title: "Movie 1" },
        { title: "Movie 2" }
      ]
    })
  };
};
