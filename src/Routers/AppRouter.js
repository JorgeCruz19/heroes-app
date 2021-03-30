import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from '../components/login/LoginPage'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route path="/" component={DashboardRoutes} />
				</Switch>
			</div>
		</Router>
	)
}

export default AppRouter
