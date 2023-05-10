// Import necesssary express and ejs modules
import { render } from "ejs";
import express, { response } from "express";

// Create a new express instance
const app = express();

// Assign URL of API to variable
const url = "https://api.visualthinking.fdnd.nl/api/v1";

// Make EJS the selected view engine for our express app, and assign the views directory
app.set("view engine", "ejs");
app.set("views", "./views");

// Let express know we want to use JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use map "public" to serve static files
app.use(express.static("public"));


// --- Rendering the index page: ---
app.get("/", (request, response) => {
  response.render("index");
});

// --- Rendering the overview page: ---
// Define an HTTP GET route for the path '/overviewpage'
app.get("/overviewpage", (request, response) => {
  // Log the value of the 'methods' parameter from the request's query string
  console.log(request.query.methods);

  // Define the URL to fetch the data from
  const methodsUrl = url + "/methods?first=100";

  // Use the fetchJson function to retrieve data from the specified URL
  // Once the data is retrieved, render the 'overviewpage' view with the data
  fetchJson(methodsUrl).then((data) => {
    response.render("overviewpage", data);
  });
});

// --- Rendering the detail page: ---
// Define an HTTP GET route for the path '/detailpage/:slug', where ':slug' is a URL parameter
app.get("/detailpage/:slug", (request, response) => {
  // Construct the URL to fetch the detail page data from based on the URL parameter ':slug'
  let detailPageUrl = url + "/method/" + request.params.slug;
  // Construct the URL to fetch the comments page data from based on the query parameter 'id'
  let commentsPageUrl = url + "/comments/?id=" + request.query.id;

  // Log the constructed URL for the comments page
  // console.log(commentsPageUrl);

  const id = request.query.id;

  // Use the fetchJson function to retrieve the data for the detail page
  fetchJson(detailPageUrl).then((data) => {
    // Use the fetchJson function to retrieve the data for the comments page
    fetchJson(commentsPageUrl).then((data2) => {

      // Combine the data from both responses into a single object
      const combinedData = {
        method: data.method,   // Data from the detail page
        comments: data2.comments,   // Data from the comments page
      };

      // Log the combined data
      // console.log(combinedData);

      // Render the 'detailpage' view with the combined data
      response.render("detailpage", combinedData);
    });
  });
});

// --- Handling post requests for the comments: ---
// Define an HTTP POST route for the path '/detailpagina/:slug', where ':slug' is a URL parameter
app.post("/detailpage/:slug", (request, response) => {
  // Define the URLS we will use to post the comment data to
  const baseurl = "https://api.visualthinking.fdnd.nl/api/v1/";
  const url = `${baseurl}comments`;
  // Construct the URL to fetch the comments page data from based on the query parameter 'id'
  const commentUrl = `${baseurl}comments` + "?id=" + request.query.id;

  // Log the request body (the data submitted by the user)
  console.log("verstuurd:");
  console.log(request.body);

  // Use the postJson function to post the comment data to the specified URL
  postJson(url, request.body).then((data) => {

    // Create a copy of the request body
    let newComment = { ...request.body };

    // Log the response data from the API
    console.log("ontvangen:");
    console.log(data);

    // Check if the comment was successfully posted
    if (data.success) {
      // If the comment was successfully posted, redirect to the detail page with a success message
      response.redirect(
        "/detailpage/" + request.params.slug + "?methodPosted=true"
      );
    } else {
      // If the comment was not successfully posted, redirect to the detail page with an error message
      response.redirect(
        "/detailpage/" + request.params.slug + "?methodPosted=false"
      );
    }
  });
});

// Stel het poortnummer in waar express op gaat luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}

// post json

export async function postJson(url, body) {
  return await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((error) => error);
}


// lees meer functie detailpagina

let stappenplan = document.querySelector("stappen");
stappenplan.addEventListener("click", toonStappenplan);

function toonStappenplan(){
  const
}