"use strict";

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App';
import TopNavBar from './modules/TopNavBar';

var navBarItems = [{
            id: 1,
            name: "Main Page",
            link: "/main",
            component: App
        }, {
            id: 2,
            name: "Projects",
            link: "/projects",
            component: App
        }, {
            id: 3,
            name: "Tasks",
            link: "/tasks",
            component: App
        }
    ];


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
	    {
	    	navBarItems.map(function(el){
	    		<Route path={el.link} component={el.component}/>
	    	})
	    }
    </Route>
  </Router>
), document.getElementById('app'));

render(<TopNavBar elements={navBarItems}/>, document.getElementById('app'));