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
    // const userName = event.target.elements[0].value
    // const repo = event.target.elements[1].value
    // const path = `/repos/${userName}/${repo}`
    // console.log(path);

    // browserHistory.push(path)
    // console.log("browserHistory :\n", browserHistory)
    let url = "http://gd2.mlb.com/components/game/mlb/year_2016/month_07/day_22/gid_2016_07_22_atlmlb_colmlb_1/boxscore.json";
    fetch(url).then(r => r.json())
      .then(data => console.log(data))
      .catch(e => console.log("Booo"))




    // let promise = fetch("http://gd2.mlb.com/components/game/mlb/year_2016/month_07/day_22/gid_2016_07_22_atlmlb_colmlb_1/plays.json");
    // promise.then(function(resp){
    //   console.log(resp)
    // })
    // .then(function(response) {
    //   console.log("response :\n", response.json())
    //   // return response.blob();
    // })
    // .catch(function(error) {
    //   console.log('There has been a problem with your fetch operation: ' + error);
    // });
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
               <input type="text" placeholder="name"/> / {' '}
               <button type="submit">Go</button>
             </form>
           </li>
         </ul>
         {this.props.children}
      </div>
    )
  }
})
