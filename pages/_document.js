import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<link
						rel="stylesheet"
						href="//cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.min.css"
					/>
				</Head>
				<style jsx global>{`
					body {
					}
				`}</style>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default MyDocument
