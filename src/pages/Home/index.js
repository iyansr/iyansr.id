import React from 'react'
import Img from 'react-image'
import { Helmet } from 'react-helmet'
import { Layout } from '../../components'

const index = () => {
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
			<h1 className='main-name'>I Putu Saputrayana</h1>
			<div className='mini-info'>
				<p>Depok, Indonesia</p>
				<div>
					<p>Software Engineer, React Native Developer</p>
					<p style={{ fontWeight: 'bold' }}>DOOgether</p>
				</div>
			</div>

			<hr className='main-line' />
			<h1>About</h1>
			<p>
				A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React
				Native, and Flutter. And would be a fast learner to doing new things and build good teamwork either. Can become
				a project leader/manager and using tools like Trello to manage project and task.
			</p>
			<h1 className='my-8'>Coding Activities</h1>
			<br />
			<div className='row'>
				<figure className='col-lg-6 '>
					<embed
						style={{ borderRadius: '1rem' }}
						src='https://wakatime.com/share/@iyansr/dc567173-9272-476f-80f3-49e60a6a7227.svg'></embed>
				</figure>
				<figure className='col-lg-6 '>
					<embed
						style={{ borderRadius: '1rem' }}
						src='https://wakatime.com/share/@iyansr/e6cf2b9d-10c8-47b1-a6d1-59b4395291c6.svg'></embed>
				</figure>
			</div>
		</Layout>
	)
}

export default index
