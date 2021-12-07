import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/Desktop/LandingPage';
const MainRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default MainRouter;
