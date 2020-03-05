import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const Page404 = () => {
	return (
		<div>
			<Helmet>
				<title>Portfolio | iyansr.id</title>
			</Helmet>
			<h1>Ups... Seems like you're visiting wrong page</h1>
			<p>
				Take me back to{' '}
				<Link to='/' className='link'>
					Home
				</Link>
			</p>
		</div>
	)
}

export default Page404
