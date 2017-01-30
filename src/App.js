import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import api
import Client from './api/index'

// import component
import Home from './Home'
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

	constructor(props) {
	  super(props)
	  this.state = {
	  	error: false,
	  	loading: true,
	  	posts: []
	  }
	}

	componentWillMount() {
	  this.client = new Client(this.props.config)
	}

	componentDidMount() {
	  this.listPosts()
	}

	listPosts() {
	  const res = this.client.listPosts()
	  res.then(posts => {
	  	this.setState({
	  	  error: false,
	  	  loading: false,
	  	  posts
	  	})
	  }).catch(err => {
	  	this.setState({
	  	  error: true,
	  	  loading: false
	  	})
	  	console.error(err.stack)
	  })
	}

	render() {
	  const props = Object.assign({}, this.state, { config: this.props.config })
	  return (
	  	<div className="typer">
	  	  <main>
	  	  	{ React.cloneElement(this.props.children, props) }
	  	  </main>
	  	</div>
	  )
	}
}

const router = (
  <Router history={browserHistory}>
  	<Route path={`/${window.config.repo}`} component={App}>
  	  <IndexRoute component={Home} />
  	  <Route path='/post/:id' component={Post} />
  	</Route>
  </Router>
)

render(router, document.getElementById('root'))
