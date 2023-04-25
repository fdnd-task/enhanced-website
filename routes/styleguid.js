styleguid

import express from 'express'

const styleguid = express.Router()

const options = {
	path: '/styleguid',
	title: 'styleguid',
	template: './styleguid.ejs',
}

styleguid.get('/styleguid', (request, response) => response.render('index', options))

export default styleguid