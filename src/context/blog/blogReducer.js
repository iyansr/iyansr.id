import { GET_ALL_POST, ERROR_GET_ALL_POST } from '../types'

export default (state, action) => {
	switch (action.type) {
		case GET_ALL_POST:
			return {
				...state,
				posts: action.payload,
				isLoading: false,
			}

		case ERROR_GET_ALL_POST:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			}

		default:
			return state
	}
}
