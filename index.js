// Express uit de nodemodules map
import express from 'express'

// Maak een nieuwe express app aan
const app = express()

//  Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik maken van de "public" map 
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index')
})

app.get('/proces', (request, response) => {
  response.render('proces')
})

app.get('/agenda', function (req, res) {
  res.render('agenda')
})

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})