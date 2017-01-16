import React, { Component } from 'react'

export default class CalendarWeek extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  	const { dayNames } = this.props
  	return (
  	  <div className='row calendar-week'>
	  	{dayNames.map((item,i) => {
	  	    	return (
				  <div className='cell' key={i}>
	  	    	  	{item}
	  	    	  </div>
	  	    	)
	  	    })}
  	  </div>
  	)
  }

}