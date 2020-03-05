import React from 'react'
import { Helmet } from 'react-helmet'

const index = () => {
	return (
		<div>
			<Helmet>
				<title>Portfolio | iyansr.id</title>
			</Helmet>
			<h1>
				Coming Soon{' '}
				<span role='img' aria-label='emoji'>
					😊
				</span>{' '}
			</h1>
			<br />
			<br />
			<h3>
				Meanwhile, you can check my github{' '}
				<a className='link' href='https://github.com/iyansr?tab=repositories' target='_blank' rel='noreferrer noopener'>
					repo
				</a>
			</h3>
		</div>
	)
}

export default index
