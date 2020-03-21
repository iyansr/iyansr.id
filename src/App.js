import React from 'react'
import './index.css'
import { Navigation } from './components'
import { Page404 } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import Footer from 'components/Footer'
import BlogContextState from 'context/blog/BlogContext'

const App = () => {
	return (
		<BlogContextState>
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
				<Footer />
			</Router>
		</BlogContextState>
	)
}

export default App
