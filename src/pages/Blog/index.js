import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import './style.css'
import PostCard from './PostCard'
import { BlogContext } from 'context/blog/BlogContext'

const Blog = () => {
	const blogContext = useContext(BlogContext)

	const { isLoading, posts, error } = blogContext

	return (
		<div>
			<Helmet>
				<title>Blog | iyansr.id</title>
			</Helmet>
			<h1 style={{ fontWeight: 'bold' }} className='mt-5'>
				Here Some Articles You Can Read{' '}
				<span role='img' aria-label='emoji'>
					🤓
				</span>{' '}
			</h1>
			<hr className='main-line mt-5 mb-5' />
			<div className='row'>
				{!isLoading && !error && posts.map((post, index) => <PostCard key={index} post={post} />)}
			</div>
		</div>
	)
}

export default Blog
