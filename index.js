
import express from 'express'
import compression from 'compression'
import helmet from 'helmet'

import startPage from './routes/start.js'
import notFoundPage from './routes/not-found.js'

const { env } = process
const server = express()

const port = env.PORT

server.set('view engine', 'ejs')
server.set('views', 'views')
server.set('trust proxy', true)

server.use(compression())
server.use(helmet())
server.use(express.static('public'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

/* Routes */
server.get('/', startPage)
server.get('**', notFoundPage)

server.listen(port, () => {
	console.log(`App is served on port http://localhost:${port}/`)
})

