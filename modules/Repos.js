import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import allRoutes from '../data/routes_all'
import RoutingMethods from '../methods/routing'

let links = RoutingMethods.createLink(allRoutes);
console.log("links :\n", links)


export default React.createClass({
  render() {
    return (
      <div>
        <h1>Repos</h1>
         <ul>
           <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
           <li><NavLink to="/repos/facebook/react">React</NavLink></li>
         </ul>
         {/* will render `Repo.js` when at /repos/:userName/:repoName */}
         {this.props.children}
      </div>
    )
  }
})
