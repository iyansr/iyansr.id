import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import './style.css'
import PostCard from './PostCard'
import Axios from 'axios'

let BASE_URL

if (process.env.NODE_ENV === 'production') {
	BASE_URL = process.env.REACT_APP_BASE_API_URL
} else {
	BASE_URL = 'http://localhost:9000/.netlify/functions/api/v1'
}

const Blog = () => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const fetchPosts = async () => {
		try {
			const result = await Axios.get(`${BASE_URL}/blog`)
			setPosts(result.data.list)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	useEffect(() => {
		ReactGA.pageview('/blog')
	}, [])

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
			<div className='row'>{!isLoading && posts.map((post, index) => <PostCard key={index} post={post} />)}</div>
		</div>
	)
}

export default Blog
