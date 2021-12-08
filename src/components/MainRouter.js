import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from '../pages/Desktop/AboutUs';
import LandingPage from '../pages/Desktop/LandingPage';
import Product from '../pages/Desktop/Product';
import Publication from '../pages/Desktop/Publication';
import PublicDetailPage from '../pages/Desktop/PublicDetailPage';
const MainRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<LandingPage active={1} />
				</Route>
				<Route exact path='/product'>
					<Product active={2} />
				</Route>
				<Route exact path='/about'>
					<AboutUs active={4} />
				</Route>
				<Route exact path='/publication'>
					<Publication active={5} />
				</Route>
				<Route exact path='/publication/:profile'>
					<PublicDetailPage active={5} />
				</Route>
			</Switch>
		</Router>
	);
};

export default MainRouter;
