"use strict";

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App';
import TopNavBar from './modules/TopNavBar';
import Projects from './Modules/Projects'
import Tasks from './Modules/Tasks'

var navBarItems = [{
            id: 1,
            name: "Main Page",
            link: "/main",
            component: TopNavBar
        }, {
            id: 2,
            name: "Projects",
            link: "/projects",
            component: Projects
        }, {
            id: 3,
            name: "Tasks",
            link: "/tasks",
            component: Tasks
        }
    ];


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        {
            navBarItems.map(function(el) {
                return <Route path={el.link} component={el.component}/>;
            })
        }
    </Route>
  </Router>
), document.getElementById('app'));
