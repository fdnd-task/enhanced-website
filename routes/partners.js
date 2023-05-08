import express from 'express'
import { get } from '../lib/data-access.js'

const partners = express.Router()

const options = {
	path: '/partners',
	title: 'partners',
	template: './partners.ejs',
	styles: '/styles/start.css',
}

partners.get('/partners', async (request, response) => {
	const getresponse = await get('website')
	console.log(getresponse);

	response.render('index', options)
})

export default partners