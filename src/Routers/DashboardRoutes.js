import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { HeroesPage } from '../components/heroes/HeroesPage'
import { DcPage } from '../components/dc/DcPage'
import { MarvelPage } from '../components/marvel/MarvelPage'
import { SearchPage } from '../components/search/SearchPage'

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/marvel" component={MarvelPage} />
					<Route exact path="/heroe/:heroId" component={HeroesPage} />
					<Route exact path="/dc" component={DcPage} />
					<Route exact path="/search" component={SearchPage} />

					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	)
}

export default DashboardRoutes
