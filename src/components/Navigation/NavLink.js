import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const NavLink = ({ name, to, logo }) => {
	return (
		<li className='nav-item-isr'>
			<Link to={to} className='nav-link-isr'>
				{logo}
				<span className='link-text-isr'>{name}</span>
			</Link>
		</li>
	)
}

NavLink.propTypes = {
	name: PropTypes.string.isRequired,
}

export default NavLink
