import React, { Component } from 'react'

export default class CalendarHeader extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
  	const { monthNames,year,month,monthPrev,monthNext,yearPrev,yearNext } = this.props
  	return (
  	  <div className='calendar-header row'>
  	    <div className='m-prev cell' onClick = {monthPrev} role='button' />
  	    <div className='y-prev cell' onClick = {yearPrev} role='button' />
  	    <div className='content cell'>
  	      <span>{monthNames[month]}</span>
  	      <span>{year}</span>
  	    </div>
  	    <div className='y-next cell' onClick = {yearNext} role='button' /> 
  	    <div className='m-next cell' onClick = {monthNext} role='button' />
  	  </div>
  	)
  }
}