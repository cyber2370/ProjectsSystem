"use strict";

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';

import App from './modules/App';
import TopNavBar from './modules/TopNavBar';
import Projects from './modules/Projects';
import Tasks from './modules/Tasks';
import Subtasks from './modules/Subtasks';

const router = React.createClass({
    render(){
        return (
            <Provider store={store}>
              <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Projects} />
                    <Route path="projects" component={Projects} />
                    <Route path="projects/:projectId" component={Tasks} />
                    <Route path="tasks/:taskId" component={Subtasks} />
                </Route>
              </Router>
            </Provider>
        );
    }
});

render(React.createElement(router), document.getElementById('app'));
