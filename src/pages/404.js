import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

const Page404 = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname)
	}, [])
	return (
		<div>
			<Helmet>
				<title>Not Found | iyansr.id</title>
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
