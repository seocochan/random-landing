import cookie from 'js-cookie'

const TOKEN = 'token'

export const isAuthenticated = (req = {}) => {
	console.log(`context: ${process.browser ? 'browser' : 'server'}`)
	console.log(`cookie: ${JSON.stringify(process.browser ? cookie.get() : req.cookies)}`)

	return Boolean(process.browser ? cookie.get(TOKEN) : req.cookies[TOKEN])
}

export const setToken = value => {
	cookie.set(TOKEN, value)
}
