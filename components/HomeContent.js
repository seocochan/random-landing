import Link from 'next/link'
import { Divider } from 'antd'

const HomeContent = () => {
	return (
		<div>
			<h1>Home</h1>
			<div>
				<Link href={'/landing'}>
					<a>to landing</a>
				</Link>
				<span> / </span>
				<Link href={'/dashboard'}>
					<a>to dashboard</a>
				</Link>
			</div>
			<Divider />
			<p>This is home.</p>
		</div>
	)
}
export default HomeContent
