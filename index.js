// Importeer express uit de node_modules map
import { render } from "ejs";
import express, { response } from "express";

// Maak een nieuwe express app aan
const app = express();

// get info form api

const url = "https://api.visualthinking.fdnd.nl/api/v1";

// Stel ejs in als template engine en geef de 'views' map door
app.set("view engine", "ejs");
app.set("views", "./views");

// Stel afhandeling van formulieren inzx
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gebruik de map 'public' voor statische resources
app.use(express.static("public"));

// Maak een route voor de index

// homepagina
app.get("/", (request, response) => {
  response.render("index");
});

// profile

app.get("/profile", (request, response) => {
  response.render("profile");
});

// overzichtspagina
app.get("/overzichtspagina", (request, response) => {
  console.log(request.query.methods);
  const methodsUrl = url + "/methods?first=100";

  fetchJson(methodsUrl).then((data) => {
    response.render("overzichtspagina", data);
  });
});

// detailpagina

app.get("/detailpagina/:slug", (request, response) => {
  // console.log(request.query.methods);
  let detailPageUrl = url + "/method/" + request.params.slug;
  let commentsPageUrl = url + "/comments/?id=" + request.query.id;
  console.log(commentsPageUrl);
  const id = request.query.id;

  fetchJson(detailPageUrl).then((data) => {
    fetchJson(commentsPageUrl).then((data2) => {
      console.log(commentsPageUrl, data2);
      const combinedData = {
        method: data.method,
        comments: data2.comments,
      };
      console.log(combinedData);
      response.render("detailpagina", combinedData);
    });
  });
});

// post detailpagina

app.post("/detailpagina/:slug", (request, response) => {
  const baseurl = "https://api.visualthinking.fdnd.nl/api/v1/";
  const url = `${baseurl}comments`;
  const commentUrl = `${baseurl}comments` + "?id=" + request.query.id;

  console.log("verstuurd:");
  console.log(request.body);

  postJson(url, request.body).then((data) => {
    let newComment = { ...request.body };
    console.log("ontvangen:");
    console.log(data);
    if (data.success) {
      response.redirect(
        "/detailpagina/" + request.params.slug + "?methodPosted=true"
      );
    } else {
      response.redirect(
        "/detailpagina/" + request.params.slug + "?methodPosted=false"
      );
      // const errormessage = `${data.message}: Werkt niet:(`;
      // const newdata = { error: errormessage, values: newComment };

      // response.render("detailpagina/" + request.params.slug, newdata);
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
