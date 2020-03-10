import React from 'react'
import { Helmet } from 'react-helmet'
import './style.css'
import PostCard from './PostCard'
import { works } from './work.json'

const WorkPage = () => {
	return (
		<div>
			<Helmet>
				<title>Portfolio | iyansr.id</title>
			</Helmet>
			<br />
			<br />
			<h1 style={{ fontWeight: 'bold' }}>
				My Work{' '}
				<span role='img' aria-label='emoji'>
					🔥
				</span>{' '}
			</h1>
			<br />
			<br />

			<div className='row'>
				{works.map(work => (
					<PostCard key={work.id} work={work} />
				))}
			</div>
		</div>
	)
}

export default WorkPage
