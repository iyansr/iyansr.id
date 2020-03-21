import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
	return (
		<div className='col-sm-12 col-md-6 col-lg-4 my-3 card__cont'>
			<div className='card-container--custom'>
				<Link to={`/blog/${post.slug}`} className='card--image'>
					<img src={post.thumbnail} alt={post.thumbnail} />
				</Link>
				<div className='card--content-blog'>
					<div className='my-4'>
						<Link to={`/blog/${post.slug}`} className='blog-title h3'>
							{post.title}
						</Link>
					</div>
					<p className='card--desc'>{post.previewDesc}</p>
					<div className='card-blog-tag'>
						{post.tags.map((tag, index) => (
							<span className='blog-tag' key={index}>
								#{tag.name}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostCard
