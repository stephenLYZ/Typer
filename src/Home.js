import React, { Component } from 'react'
import Calendar from './components/calendar/Calendar'

export default class Home extends Component {

	static propTypes = {
	    config: React.PropTypes.object,
	    loading: React.PropTypes.bool,
	    error: React.PropTypes.bool,
	    posts: React.PropTypes.array
	}

	static defaultProps = {
	    loading: true,
	    error: false,
	}

	constructor(props) {
		super(props)

		// this.state = {
		// 	year: null,
		// 	month: null,
		// 	day: null
		// }
	}

	componentDidMount() {
		document.title = this.props.config.title || 'diary'
	}


	render() {
		return (
		  <Calendar posts={this.props.posts} />
		)
	}
}
