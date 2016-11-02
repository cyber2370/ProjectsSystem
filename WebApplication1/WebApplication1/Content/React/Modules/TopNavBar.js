import React from 'react'
import { Link } from 'react-router'

export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var navBarItems = this.props.elements;

    return (<div className="headerMenu">
                <ul role="nav">
                    {
                        navBarItems.map(function (el) {
                            return <li key={el.id}>
                            	<Link to={el.link} activeClassName="active">{el.name}</Link>
                            </li>;
                        })
                    }
                </ul>
            </div>);
  }
}