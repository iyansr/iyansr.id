import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='isr--footer'>
			<span>
				© 2020 iyansr.id built with{' '}
				<span role='img' aria-label='emoji'>
					🔥
				</span>{' '}
				by <Link to='/'>Iyan Saputra</Link>
			</span>
		</div>
	)
}

export default Footer
