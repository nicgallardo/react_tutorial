// modules/Repos.js
import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    console.log("this.props.params:\n", this.props)
    return (
      <div>
        <h1>Repo</h1>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})
