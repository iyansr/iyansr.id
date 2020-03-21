import React, { useState, useEffect } from 'react'
import { Layout } from 'components'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import Axios from 'axios'

let BASE_URL

if (process.env.NODE_ENV === 'production') {
	BASE_URL = process.env.REACT_APP_BASE_API_URL
} else {
	BASE_URL = 'http://localhost:9000/.netlify/functions/api/v1'
}

const Detail = ({ match }) => {
	const [post, setPost] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	const fetchPost = async () => {
		try {
			const response = await Axios.get(`${BASE_URL}/blog/${match.params.slug}`)

			setIsLoading(false)
			setPost(response.data.post)
		} catch (error) {
			console.log(error)
		}
	}

	const updateCodeSyntaxHighlighting = () => {
		document.querySelectorAll('pre code').forEach(block => {
			hljs.highlightBlock(block)
		})
	}

	useEffect(() => {
		fetchPost()
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		updateCodeSyntaxHighlighting()
	})

	return (
		<Layout>
			{!isLoading && (
				<>
					<img src={post.thumbnail} alt={post.thumbnail} style={{ width: '100%' }} className='mb-5' />

					<div className='text-justify'>
						<ReactMarkdown source={post.markdown} escapeHtml={false} />
					</div>
				</>
			)}
		</Layout>
	)
}

export default Detail
