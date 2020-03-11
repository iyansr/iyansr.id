import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'

const Blog = () => {
	useEffect(() => {
		ReactGA.pageview('/blog')
	}, [])
	return (
		<div>
			<Helmet>
				<title>Blog | iyansr.id</title>
			</Helmet>
			<h1>
				Coming Soon{' '}
				<span role='img' aria-label='emoji'>
					😊
				</span>{' '}
			</h1>
		</div>
	)
}

export default Blog
