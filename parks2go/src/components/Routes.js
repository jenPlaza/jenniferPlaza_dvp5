import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import Home from '../pages/index'
import About from '../pages/about'
//import Map from '../components/map/map'
//import ParkGridHome from '../components/grids/parkGridHome'
//import ParkGridStateActivities from '../components/grids/parkGridStateActivities'
import StateActivities from '../pages/stateActivities'
import StateParks from '../pages/stateParks'
import Park from '../pages/park'

//exporting class Routes
export default function Routes() {
  return (
		<div>
				<Switch>
	  				<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					{/*SB Added this as a "route param" demo*/}
					<Route exact path='/stateActivities/:targetId' component={StateActivities} />
	  				<Route exact path='/stateParks/:targetId/:activity' component={StateParks} />
	  				<Route exact path='/park/:parkId' component={Park} />
	  
	  				{/*<Route exact path='/stateActivities/:activity' component={StateActivities} />
					<Route exact path='/parkGridStateActivities' component={ParkGridStateActivities} />
					<Route exact path='/map' component={Map} />
					<Route exact path='/parkGridHome' component={ParkGridHome} />
	  				<Route exact path='/stateParks' component={StateParks} />
	  				<Route exact path='/park' component={Park} />*/}
	  				
				</Switch>
			</div>
    );
}
