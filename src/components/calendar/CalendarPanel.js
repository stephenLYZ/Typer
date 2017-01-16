import React, { Component } from 'react'

export default class CalendarPanel extends Component {
  constructor(props) {
    super(props)
  }
  
  renderOffset() {
  	const {firstOfMonth} = this.props
  	const offsetArray = []
  	

  	for (var i = 0 ; i < firstOfMonth; i++) {
  	  offsetArray[i] = i
  	}

  	return offsetArray.map((item,i) => {
  	  return (
  	  	<div className="date-cell" key={i}></div>
  	  )
  	})
	
  }

  renderDays() {
  	const { daysInMonth,today,month,year } = this.props
  	const dayArray = []
  	const _month = new Date().getMonth()
  	const _year = new Date().getFullYear()

  	for (var i = 0 ;i < daysInMonth; i++) {
  		dayArray[i] = i + 1
  	}

  	return  dayArray.map((item,i) => {
  	  return (
  	  	 _year === year && _month === month && item === today ?
  	  	   <div className='date-cell today' key={i}>{item}</div>
  	  	   : <div className='date-cell' key={i}>{item}</div>
  	  )
  	})

  }

  render() {
  	return (
  		<div className='calendar-panel'>
  			{this.renderOffset()}
  			{this.renderDays()}
  		</div>
  	)
  }

}