import React from 'react'
import NavLink from 'components/Navigation/NavLink'
import NavLogo from 'components/Navigation/NavLogo'
import { ReactComponent as Branch } from 'assets/svg/code-branch-solid.svg'
import { ReactComponent as HomeLogo } from 'assets/svg/synagogue-solid.svg'
import { ReactComponent as Pen } from 'assets/svg/pen-nib-solid.svg'
import { ReactComponent as Person } from 'assets/svg/user-circle-solid.svg'

const Navigation = () => {
	return (
		<nav className='navbar-isr'>
			<ul className='navbar-nav-isr'>
				<NavLogo />
				<NavLink to='/' name='Home' logo={<HomeLogo className='nav-logo-isr' />} />
				<NavLink to='/work' name='Porfolio' logo={<Branch className='nav-logo-isr' />} />
				<NavLink to='/blog' name='Blog' logo={<Pen className='nav-logo-isr' />} />
				<NavLink to='/about' name='About' logo={<Person className='nav-logo-isr' />} />
			</ul>
		</nav>
	)
}

export default Navigation
