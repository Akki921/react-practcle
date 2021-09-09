import React from "react";
var axios = require("axios").default;
function DemoApi() {
  var options = {
    method: "GET",
    url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
    params: { s: "Avengers Endgame", r: "json", page: "1" },
    headers: {
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "48c8cc7e50msh2a6fdaaad8881a7p128e23jsna82dcd6c5d9a",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <div></div>;
}

export default DemoApi;
