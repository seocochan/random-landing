const Dashboard = ({ url }) => {
	return (
		<div style={{  height: '100vh', maxWidth: 1312, margin: 'auto' }}>
			<iframe
				src={`${url}:showVizHome=no&:embed=true`}
				width="100%"
				height="100%"
				frameBorder={0}>
				<p>Your browser does not support iframes.</p>
			</iframe>
		</div>
	)
}

export default Dashboard
