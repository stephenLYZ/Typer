import React, { Component } from 'react'
import Calendar from './components/calendar/Calendar'
import Footer from './components/footer'

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

	}

	componentDidMount() {
		document.title = this.props.config.title || 'diary'
	}


	render() {
		return (
			<div>
				<Calendar posts={this.props.posts} />
				<Footer />
			</div>
		)
	}
}
