import express from 'express'
import { get } from '../lib/data-access.js'

const partners = express.Router()

const options = {
	path: '/partners',
	title: 'partners',
	template: './partners.ejs',
	styles: 'start.css',
}

partners.get('/partners', async (request, response) => response.render('index', options))

export default partners