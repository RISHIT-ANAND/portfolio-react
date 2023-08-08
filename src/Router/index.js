import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/Homepage';
import Resume from '../Components/Resume';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/resume"><Resume /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;