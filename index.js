import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/*Children of App*/}
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))


// render((
//   <Router history={hashHistory}>
//     // <Route path="/" component={App}/>
//     {/* add the routes here */}
//   </Router>
// ), document.getElementById('app'))
