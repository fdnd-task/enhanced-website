import express from 'express'
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml)

const content = {
	introductie: {
		title: 'Introductie',
		intro: 'Welkom bij Introductie',
		examples: [
			{
				title: 'Titel',
				description: 'Omschrijving van het voorbeeld',
				code: "<p>Hier komt code</p>"
			}
		]
	},
	typografie: {
		title: 'Typografie',
		intro: 'Welkom bij Typografie',
		examples: [
			{
				title: 'Kop 1',
				description: 'Dit is een voorbeeld',
				code: "<h1>Kop 1</h1>"
			},
			{
				title: 'Kop 2',
				description: 'Dit is een voorbeeld',
				code: "<h2>Kop 2</h2>"
			},
			{
				title: 'Kop 3',
				description: 'Dit is een voorbeeld',
				code: "<h3>Kop 3</h3>"
			},
			{
				title: 'Kop 4',
				description: 'Dit is een voorbeeld',
				code: "<h4>Kop 4</h4>"
			},
			{
				title: 'Kop 5',
				description: 'Dit is een voorbeeld',
				code: "<h5>Kop 5</h5>"
			},
			{
				title: 'Kop 5',
				description: 'Dit is een voorbeeld',
				code: "<h6>Kop 6</h6>"
			},
			{
				title: 'Paragraaf',
				description: 'Dit is een voorbeeld',
				code: "<p>Paragraaf</p>"
			},
		]
	},
	knoppen: {
		title: 'Knoppen',
		intro: 'Welkom bij Knoppen',
		examples: [
			{
				title: 'Primaire knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
			{
				title: 'Secondaire knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button button--secondary\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
			{
				title: 'Plain knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button button--plain\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
			{
				title: 'Waarschuwings knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button button--warning\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
			{
				title: 'Gevaar knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button button--danger\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
			{
				title: 'Info knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button button--help\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
			{
				title: 'Success knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button button--success\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
			{
				title: 'Help knop',
				description: 'Dit is een voorbeeld',
				code: "<button class=\"button button--info\">\n\t<span class=\"button__icon\"><%- icon(\"check\") %></span>\n\t<span class=\"button__label\">Knop</span>\n</button>"
			},
		]
	}
}

const styleguide = express.Router()

const options = {
	path: '/styleguide',
	title: 'styleguide',
	template: './styleguide.ejs',
	styles: 'styleguide.css',
	mainClass: 'styleguide'
}

styleguide.get('/styleguide', async (request, response) => response.redirect('/styleguide/introductie'))

styleguide.get('/styleguide/**', async (request, response) => {
	const { url } = request
	const params = url.split('/').filter(Boolean)
	const slug = params[1]
	const pageContent = content[slug]
	options.content = pageContent
	if (!pageContent) response.redirect('**')
	else response.render('index', options)
})

export default styleguide