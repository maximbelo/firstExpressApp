// Need to 'require' express
const express = require("express");
// Need to save it in a variable
const app = express();

// Anytime we have an incoming request, this callback will run
app.use(() => {
  console.log("We got a new request!");
});

// Need to go to localhost:3000 in our browser (or any other address that we give to our server) to get to the local server
// The goal of our incoming request is to get an outgoing res
app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
