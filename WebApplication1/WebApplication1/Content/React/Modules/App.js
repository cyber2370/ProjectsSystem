import React from 'react'
import { Link } from 'react-router'
import TopNavBar from './TopNavBar'
import Projects from './Projects'
import Tasks from './Tasks'

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

export default React.createClass({
  render() {
    return (
      <div>
        <TopNavBar elements={navBarItems} />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
})