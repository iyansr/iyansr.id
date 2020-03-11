import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'

const About = () => {
	useEffect(() => {
		ReactGA.pageview('/blog')
	}, [])
	return (
		<div>
			<Helmet>
				<title>About | iyansr.id</title>
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

export default About
