import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

// import component
import Home from './App'
import Post from './Post'

import './styles/main.scss'

class App extends Component {

	static propTypes = {
	  config: React.PropTypes.object,
	  children: React.PropTypes.object
	}

	static defaultProps = {
	  config: window.config
	}
}

const router = (
  <Router>
  	<Route path='/' component={App}>
  	  <IndexRoute component={Home} />
  	  <Route path='/post/:id' component={Post} />
  	</Route>
  </Router>
)

render(router, document.getElementById('root'))
