import Link from 'next/link'
import { Divider } from 'antd'
import DashboardContainer from '../components/DashboardContainer'

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Link href={'/'}>
				<a>to home</a>
			</Link>
			<Divider />
			<div>
				<DashboardContainer />
			</div>
		</div>
	)
}

export default Dashboard
