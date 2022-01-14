// Need to 'require' express
const express = require("express");
// Need to save it in a variable
const app = express();

// Anytime we have an incoming request, this callback will run
// Gives us access to two params -incoming req and outgoing res
// app.use((req, res) => {
//   console.log("We got a new request!");
//   res.send("<h1> This is my webpage! </h1>");
// });

// Routing
// cats => meow
// dogs => woof!
// / => home (usually refered to as the root route)

app.get("/", (req, res) => {
  res.send("Welcome home!");
});

app.post("./cats", (req, res) => {
  res.send("POST REQUEST TO /CATS! THIS IS DIFFERENT THAN A GET REQUEST");
});

app.get("/cats", (req, res) => {
  // res.send() is used to send back content
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

app.get("*", (req, res) => {
  res.send("I don't know that path!");
});

// Need to go to localhost:3000 in our browser (or any other address that we give to our server) to get to the local server
// The goal of our incoming request is to get an outgoing res
app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
