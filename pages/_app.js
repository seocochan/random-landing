import App, { Container } from 'next/app'
import React from 'react'
import { ConfigProvider, LocaleProvider, Layout } from 'antd'
import kr_KR from 'antd/lib/locale-provider/ko_KR'

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<ConfigProvider>
					<LocaleProvider locale={kr_KR}>
						<Layout>
							<Layout.Content style={{ padding: '0 50px' }}>
								<div
									style={{
										background: '#fff',
										padding: 24,
										marginTop: 56,
										marginBottom: 56,
										minHeight: 280,
									}}>
									<Component {...pageProps} />
								</div>
							</Layout.Content>
						</Layout>
					</LocaleProvider>
				</ConfigProvider>
			</Container>
		)
	}
}

export default MyApp
