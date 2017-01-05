import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app/';
import MainPage from './components/mainPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={MainPage} />
	</Route>
);
