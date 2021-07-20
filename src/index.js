import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './common/bower_components/bootstrap/dist/css/bootstrap.min.css';
import './common/dist/css/sb-admin-2.css';
import './common/css/style.scss';
import './css/style.scss';
import App from './App';
import PageDrama from './PageDrama';
import PageHorror from './PageHorror';
import PageAnimation from './PageAnimation';
import defStore from './routeLibrary';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path={ defStore.baseUrl + "/" } component={App} />
			<Route path={ defStore.baseUrl + defStore.linkRoute[0] } component={App} />
			<Route path={ defStore.baseUrl + defStore.linkRoute[1] } component={PageDrama} />
			<Route path={ defStore.baseUrl + defStore.linkRoute[2] } component={PageHorror} />
			<Route path={ defStore.baseUrl + defStore.linkRoute[3] } component={PageAnimation} />
		</div>
	</Router>,
	document.getElementById('root')
);
