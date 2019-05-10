import Link from 'next/link'

const HomeContent = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link href={'/landing'}>
				<a>to landing</a>
			</Link>
		</div>
	)
}
export default HomeContent
