import React, { useEffect } from 'react'
import './index.css'
import { Navigation } from './components'
import { Page404 } from './pages'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { routes } from './routes'
import ReactGA from 'react-ga'

const App = () => {
	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			ReactGA.initialize('UA-108114369-1')
		}
		console.log(process.env.NODE_PATH)
	}, [])
	return (
		<div>
			<Router>
				<Navigation />
				<main>
					<Switch>
						{routes.map((route, index) => (
							<Route key={index} exact path={route.url} component={route.component} />
						))}
						<Route component={Page404} />
					</Switch>
				</main>
				<div className='isr--footer'>
					<span>
						© 2020 iyansr.id built with{' '}
						<span role='img' aria-label='emoji'>
							🔥
						</span>{' '}
						by <Link to='/'>Iyan Saputra</Link>
					</span>
				</div>
			</Router>
		</div>
	)
}

export default App
