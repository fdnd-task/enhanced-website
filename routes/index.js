var express = require('express');
var router = express.Router();

const url = `${process.env.API_URL}/smartzones?first=100`;
const baseurl = `${process.env.API_URL}`;




/* GET home page. */
router.get('/', function(req, res, next) {

  fetchJson(url).then((data) => {

    res.render('index', data)

  })


});

router.get('/filtered', function(req, res, next) {

  fetchJson(url).then((data) => {

    let filtered;
    
  
    if(req.query){
        filtered = Object.values(data.smartzones).filter(value => {
          return (value.town.includes(req.query.town) && value.utilization.includes(req.query.utilization) && value.size == req.query.size) 
          || (value.town.includes(req.query.town) && value.utilization.includes(req.query.utilization)) 
          || value.town.includes(req.query.town) 
          || value.utilization.includes(req.query.utilization) 
          || value.size == req.query.size
        })
        res.render('index', {smartzones: filtered});
        console.log(data.smartzones[1].utilization)
  }
  // else if(req.query.town == "Rotterdam"){
  //   filtered = Object.values(data.smartzones).filter(value => value.town == "Rotterdam")
  //   res.render('index', {smartzones: filtered});
  //   console.log("ba")
  // }
  // else if(req.query.town == "Utrecht"){
  //   filtered = Object.values(data.smartzones).filter(value => value.town == "Utrecht")
  //   res.render('index', {smartzones: filtered});
  //   console.log("ba")
  // }
  // else if(req.query.town == "Schiedam"){
  //   filtered = Object.values(data.smartzones).filter(value => value.town == "Schiedam")
  //   res.render('index', {smartzones: filtered});
  //   console.log("ba")
  // }
  // else{
  //   res.render('index', data)
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