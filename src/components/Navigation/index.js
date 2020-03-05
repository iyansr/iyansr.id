import React from 'react'
import NavLink from './components/NavLink'
import NavLogo from './components/NavLogo'
import { ReactComponent as Branch } from '../../assets/svg/code-branch-solid.svg'
import { ReactComponent as HomeLogo } from '../../assets/svg/synagogue-solid.svg'
import { ReactComponent as Pen } from '../../assets/svg/pen-nib-solid.svg'
import { ReactComponent as Person } from '../../assets/svg/user-circle-solid.svg'

const Navigation = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>
				<NavLogo />
				<NavLink to='/' name='Home' logo={<HomeLogo className='nav-logo' />} />
				<NavLink to='/work' name='Porfolio' logo={<Branch className='nav-logo' />} />
				<NavLink to='/blog' name='Blog' logo={<Pen className='nav-logo' />} />
				<NavLink to='/about' name='About' logo={<Person className='nav-logo' />} />
			</ul>
		</nav>
	)
}

export default Navigation
