import Link from 'next/link'
import React from 'react'
import EmailForm from '../components/EmailForm'

const LandingContent = () => {
	return (
		<div>
			<h1>Landing</h1>
			<Link href={'/'}>
				<a>to home</a>
			</Link>
			<EmailForm />
		</div>
	)
}

export default LandingContent