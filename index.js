// Import the required modules
import express from "express";
import https from "https";

// Create a new Express app
const app = express();

// Set EJS as the template engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

app.get("/", async function (request, response) {
  response.render("index");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Application available on: http://localhost:${port}`);
});
