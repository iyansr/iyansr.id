import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const NavLink = ({ name, to, logo }) => {
	return (
		<li className='nav-item'>
			<Link to={to} className='nav-link'>
				{logo}
				<span className='link-text'>{name}</span>
			</Link>
		</li>
	)
}

NavLink.propTypes = {
	name: PropTypes.string.isRequired,
}

export default NavLink
