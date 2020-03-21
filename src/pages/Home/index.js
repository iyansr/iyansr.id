import React from 'react'
import Img from 'react-image'
import { Helmet } from 'react-helmet'
import { Layout } from 'components'
import ReactGA from 'react-ga'

const index = () => {
	ReactGA.pageview('/')
	return (
		<Layout>
			<Helmet>
				<title>Home | iyansr.id</title>
			</Helmet>
			<div className='avatar-wrapper'>
				<Img
					src='https://avatars3.githubusercontent.com/u/42711013?s=460&v=4'
					className='avatar'
					loader={<div className='loader'></div>}
				/>
			</div>
			<br />
			<h1 className='main-name'>I Putu Saputrayana</h1>
			<div className='mini-info'>
				<p>Depok, Indonesia</p>
				<div>
					<p>Software Engineer, React Native Developer</p>
					<p style={{ fontWeight: 'bold' }}>DOOgether</p>
				</div>
			</div>
			<br />
			<hr className='main-line' />
			<h1>About</h1>
			<p>
				A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React
				Native, and Flutter. And would be a fast learner to doing new things and build good teamwork either. Can become
				a project leader/manager and using tools like Trello to manage project and task.
			</p>
			<br />
			<hr className='main-line' />
			<br />
			<h1 className='mb-5'>Contribution Chart</h1>
			<img src='https://ghchart.rshah.org/iyansr' alt='contribution chart' style={{ width: '100%' }} />
		</Layout>
	)
}

export default index
