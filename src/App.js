import React from 'react'
import './index.css'
import { Navigation, Layout } from './components'
import { Page404 } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
	return (
		<div>
			<Router>
				<Navigation />
				<Layout>
					<Switch>
						{routes.map((route, index) => (
							<Route key={index} exact path={route.url} component={route.component} />
						))}
						<Route component={Page404} />
					</Switch>
				</Layout>
			</Router>
		</div>
	)
}

export default App
