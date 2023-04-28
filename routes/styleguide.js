import express from 'express'

const styleguide = express.Router()

const options = {
	path: '/styleguide',
	title: 'styleguide',
	template: './styleguide.ejs',
}

styleguide.get('/styleguide', async (request, response) => response.redirect('/styleguide/introductie'))

styleguide.get('/styleguide/**', async (request, response) => {
	const { url } = request
	const params = url.split('/').filter(Boolean)
	const slug = params[1]
	console.log(slug);
	// const content = await fetch('data/styleguide.json')
	// 	.then(response => response.json())
	// console.log(content);
	response.render('styleguide', options)
})

export default styleguide