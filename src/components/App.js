import React, { Component } from 'react';
import web from 'routes/web';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  	render() {
		return (
			<Router>
				{ this.showRouterWeb(web) }
			</Router>
		);
	}
	showRouterWeb = (web) => {
		var result = null;
		if(web.length > 0){
			result = web.map((route,index) => {
				return (<Route 
					key = {index}
					path = {route.path}
					exact = {route.exact}
					component = {route.main}
				/>);
			});
		}
		return <Switch>{result}</Switch>
	}
}
export default App;