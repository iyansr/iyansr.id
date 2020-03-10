import React from 'react'
import './index.css'
import { Navigation } from './components'
import { Page404 } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
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
						© iyansr.id built with{' '}
						<span role='img' aria-label='emoji'>
							🔥
						</span>{' '}
						by Iyan Saputra
					</span>
				</div>
			</Router>
		</div>
	)
}

export default App
