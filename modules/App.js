import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <div className='w-100 dt pa3 ph5-ns bg-near-white'>
          <div className="dtc v-mid tl w-50">
           <a href="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70 dim" title="home">ReactOne</a>
          </div>
        </div>
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
