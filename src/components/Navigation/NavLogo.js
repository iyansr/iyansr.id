import React from 'react'

import { ReactComponent as Arrow } from '../../assets/svg/angle-double-right-solid.svg'
import { Link } from 'react-router-dom'

const NavLogo = () => {
	return (
		<li className='logo-isr'>
			<Link to='/' className='nav-link-isr'>
				<span className='link-text-isr'>iyansr.id</span>
				<Arrow className='nav-logo-isr' />
			</Link>
		</li>
	)
}

export default NavLogo
