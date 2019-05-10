import Router from 'next/router'
import { isAuthenticated } from '../utils'
import HomeContent from '../components/HomeContent'

const Home = () => <HomeContent />

Home.getInitialProps = ({ req, res }) => {
	const authenticated = isAuthenticated(req)

	if (authenticated) return {}

	if (res) {
		res.writeHead(303, {
			Location: '/landing',
		})
		res.end()
	} else {
		Router.replace('/landing')
	}
	return {}
}

export default Home
