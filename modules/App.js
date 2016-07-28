import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Header</h1>
        <ul role="nav">
          <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {/*for children*/}
        {this.props.children || <Home />}
      </div>
    )
  }
})
