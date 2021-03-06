import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/home';
import ProFeatures from './containers/proFeatures';
import Platform from './containers/platform';
import Team from './containers/team';
import Contact from './containers/contact';
import NotFound from './containers/notFound';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route  path="/profeatures" component={ProFeatures} />
			<Route  path="/platform" component={Platform} />
			<Route  path="/team" component={Team} />
			<Route  path="/contact" component={Contact} />
			<Route component={NotFound} />
		</Switch>
	);
}
