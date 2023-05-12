var express = require('express');
var router = express.Router();

const url = `${process.env.API_URL}/smartzones`;
const baseurl = `${process.env.API_URL}`;




/* GET home page. */
router.get('/', function(req, res, next) {
  const { query } = req
  console.log(query.orderBy);
  let orderBy = req.query.orderBy || 'publishedAt'
  let smartUrl = url + '&orderBy=' + orderBy + '&direction=ASC' 

  console.log(smartUrl)
  fetchJson(smartUrl).then((data) => {
    console.log(smartUrl)
    res.render('index', data)
  })
});


router.post('/', (request, response) => {
  request.body.timeStart = request.body.dateStart + 'T' + request.body.timeStart + ':00Z';
  request.body.timeEnd = request.body.dateEnd + 'T' + request.body.timeEnd + ':00Z';    
  const url1 = `${baseurl}/reservations`
  postJson(url1, request.body).then((data) => {
    let newReservation = { ... request.body}

   if (data.success) {
        response.redirect('/?reservationPosted')

    }
    else {
    const errorMessage = data.message
    const newData = { error: errorMessage, values: newReservation }
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