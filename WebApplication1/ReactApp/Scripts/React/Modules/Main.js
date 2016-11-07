import React from 'react'
import { Link } from 'react-router'
import TopNavBar from './TopNavBar'
import Projects from './Projects'
import Tasks from './Tasks'
import Subtasks from './Subtasks'

var navBarItems = [{
            id: 1,
            name: "Projects",
            link: "/projects",
            component: Projects
        }
    ];

const Main = React.createClass({
      render() {
        return (
          <div className="page">
            <div className="modalDiv"></div>
            <TopNavBar elements={navBarItems} />
            {React.cloneElement(this.props.children, this.props)}
          </div>
        );
      }
});

export default Main;