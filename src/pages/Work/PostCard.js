import React from 'react'
import { ReactComponent as Chrome } from '../../assets/svg/chrome-brands.svg'
import { ReactComponent as Github } from '../../assets/svg/github-brands.svg'

const PostCard = ({ work }) => {
	return (
		<div className='col-sm-12 col-md-6 col-lg-4 my-3 card__cont'>
			<div className='card-container--custom'>
				<div className='card--image'>
					<img src={work.thumbnail} alt='' />
				</div>
				<div className='card--content'>
					<h3 className='my-4'>{work.title}</h3>
					<p className='card--desc'>{work.desc}</p>
				</div>
				<div className='card--tag-container'>
					<a href={work.link} rel='noopener noreferrer' target='_blank' className='card--tag'>
						<Chrome className='card--logo-footer' />
					</a>
					<a href={work.github_url} rel='noopener noreferrer' target='_blank' className='card--tag'>
						<Github className='card--logo-footer' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default PostCard
