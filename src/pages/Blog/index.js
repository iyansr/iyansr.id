import React from 'react'
import { Helmet } from 'react-helmet'

const index = () => {
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

export default index
