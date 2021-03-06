import React from 'react'
import { ReactComponent as Chrome } from 'assets/svg/chrome-brands.svg'
import { ReactComponent as Github } from 'assets/svg/github-brands.svg'
import ReactGA from 'react-ga'

const PostCard = ({ work }) => {
	const onClickBtn = url => {
		ReactGA.event({
			label: `Link to Project ${url}`,
			category: 'Card Label',
		})
	}
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
					{work.link && (
						<a
							href={work.link}
							rel='noopener noreferrer'
							target='_blank'
							className='card--tag'
							onClick={() => onClickBtn(work.link)}>
							<Chrome className='card--logo-footer' />
						</a>
					)}

					<a href={work.github_url} rel='noopener noreferrer' target='_blank' className='card--tag'>
						<Github className='card--logo-footer' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default PostCard
