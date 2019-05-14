const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const cookieParser = require('cookie-parser')

app.prepare().then(() => {
	const server = express()
	server.use(cookieParser())

	server.get('/dashboard/:id', (req, res) =>
		app.render(req, res, '/dashboard', { id: req.params.id, ...req.query }),
	)

	server.get('/*', (req, res) => handle(req, res))

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Read on http://localhost:${port}`)
	})
})
