import React from 'react'

import { ReactComponent as Arrow } from '../../../assets/svg/angle-double-right-solid.svg'
import { Link } from 'react-router-dom'

const NavLogo = () => {
	return (
		<li className='logo'>
			<Link to='/' className='nav-link'>
				<span className='link-text'>iyansr.id</span>
				<Arrow className='nav-logo' />
			</Link>
		</li>
	)
}

export default NavLogo
