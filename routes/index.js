var express = require('express');
var router = express.Router();

const url = `${process.env.API_URL}/smartzones`;
const baseurl = `${process.env.API_URL}`;




/* GET home page. */
router.get('/', function(req, res, next) {
  let smartUrl = url 

  let size = req.query.size || '1'

  

  // console.log(smartUrl)

  // if(req.query.town == "Amsterdam"){
  //   fetchJson(url).then((data) => {

  //     res.render('index', Object.fromEntries(Object.entries(data).filter(([word]) => word.town == "Amsterdam")));
  
  //   })
  // }
  fetchJson(url).then((data) => {

    res.render('index', data)
    console.log(Object.values(data))

    // for (const [key, value] of Object.entries(data)) {
    // }

  })
});


// router.post('/', (request, response) => {
  

  

//   postJson(url1, request.body).then((data) => {
//     let newZone = { ... request.body }
//     console.log(data)
//     if (data.success) {
//       response.redirect('/?memberPosted=true') 
//       // TODO: squad meegeven, message meegeven
//       // TODO: Toast meegeven aan de homepagina

//     } else {
//       const errormessage = `${data.message}: Mogelijk komt dit door de slug die al bestaat.`
//       const newdata = { error: errormessage, values: newZone }

//       }
//   })
// })

router.post('/', (request, response) => {
  request.body.timeStart = request.body.dateStart + 'T' + request.body.timeStart + ':00Z';
  request.body.timeEnd = request.body.dateEnd + 'T' + request.body.timeEnd + ':00Z';    
  const url1 = `${baseurl}/reservations`
  postJson(url1, request.body).then((data) => {
    let newReservation = { ... request.body}
    // console.log(JSON.stringify(data))

   if (data.success) {
        response.redirect('/?reservationPosted')
        // console.log("yep")

    }
    else {
    const errorMessage = data.message
    const newData = { error: errorMessage, values: newReservation }
    // console.log(newData)
    }
  })
})

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}

module.exports = router;