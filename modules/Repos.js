import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import allRoutes from '../data/routes_all'
import RoutingMethods from '../methods/routing'
import { browserHistory } from 'react-router'


let Links = RoutingMethods.createLink(allRoutes);

let test = `foo`

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    console.log(path)
    // this.context.router.push(path)
    // console.log("this.cotext :\n", this.cotext)
    browserHistory.push(path)
    console.log("browserHistory :\n", browserHistory)
  },


  render() {
    return (
      <div>
        <h1>Repos</h1>
         <ul>
          {test}
           <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
           <li><NavLink to="/repos/facebook/react">React</NavLink></li>
           {/* will render `Repo.js` when at /repos/:userName/:repoName */}
           <li>
             <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="userName"/> / {' '}
               <input type="text" placeholder="repo"/>{' '}
               <button type="submit">Go</button>
             </form>
           </li>
         </ul>
         {this.props.children}
      </div>
    )
  }
})
