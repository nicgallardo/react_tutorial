import React from 'react'
import { render } from 'react-dom'

// render(<App/>, document.getElementById('app'))

import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/*Children of App*/}
      <Route path="/repos" component={Repos}/>
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
