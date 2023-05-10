import express from 'express'

// de basis url van de api
const url = 'https://api.vinimini.fdnd.nl/api/v1'

// maak een nieuwe express app
const server = express()

// Stel het poortnummer in
server.set('port', process.env.PORT || 8000)

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel de public map in
server.use(express.static('public'))

// Maak een route voor de index /categories
server.get('/', (request, response) => {
 
    const categoriesUrl= url + `/categories`

    fetchJson(categoriesUrl).then((data) => {
      response.render('index', data)
    })
  })


    // definieer de fetchJson functie
    async function fetchJson(url) {
        return await fetch(url)
          .then((response) => response.json())
          .catch((error) => error)
      }
      
      // Start met luisteren
    server.listen(server.get('port'), () => {
        console.log(`Application started on http://localhost:${server.get('port')}`)
      })
