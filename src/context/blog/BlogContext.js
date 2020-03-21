import React, { createContext, useReducer, useEffect } from 'react'
import BlogReducer from './blogReducer'
import { GET_ALL_POST, ERROR_GET_ALL_POST } from '../types'
import Axios from 'axios'

export const BlogContext = createContext()
export const BlogContextConsumer = BlogContext.Consumer

let BASE_URL

if (process.env.NODE_ENV === 'production') {
	BASE_URL = process.env.REACT_APP_BASE_API_URL
} else {
	BASE_URL = 'http://localhost:9000/.netlify/functions/api/v1'
}

const BlogContextState = ({ children }) => {
	const initialState = {
		posts: [],
		isLoading: true,
		error: null,
	}

	const [state, dispatch] = useReducer(BlogReducer, initialState)

	const getAllPost = async () => {
		console.log('FFETCHH')
		try {
			const result = await Axios.get(`${BASE_URL}/blog`)

			dispatch({
				type: GET_ALL_POST,
				payload: result.data.list,
			})
		} catch (error) {
			dispatch({
				type: ERROR_GET_ALL_POST,
				payload: error,
			})
		}
	}

	useEffect(() => {
		getAllPost()
	}, [])

	return (
		<BlogContext.Provider
			value={{
				posts: state.posts,
				isLoading: state.isLoading,
				getAllPost,
			}}>
			{children}
		</BlogContext.Provider>
	)
}

export default BlogContextState
