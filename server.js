import express from "express";
import bodyParser from "body-parser"

const server = express();

server.set("view engine", "ejs")
server.set("views", "./views")
server.set("port", process.env.PORT || 8000)

server.use(express.static("public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.listen(server.get("port"), () => {
    console.log(`Application started on http://localhost:${server.get("port")}`)
})

server.get("/", async (req, res) => {
    res.render("index")
})