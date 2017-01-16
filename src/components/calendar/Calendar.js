import React, { Component } from 'react'

import CalendarHeader from './CalendarHeader'
import CalendarWeek from './CalendarWeek'
import CalendarPanel from './CalendarPanel'

import './calendar.scss'

export default class Calendar extends Component {
  constructor(props) {
  	super(props)

    const date = new Date()
  	
    this.state = {
  		year: date.getFullYear(),
      month: date.getMonth(),
      dayNames: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      firstOfMonth: null,
      daysInMonth: null,
      today: date.getDate()
  	}

    this.monthNext = this.monthNext.bind(this)
    this.monthPrev = this.monthPrev.bind(this)

    this.yearNext = this.yearNext.bind(this)
    this.yearPrev = this.yearPrev.bind(this)

  }

  componentWillMount() {
    this.setState(this.calculate.call(null,this.state.year,this.state.month))
  }
  calculate(year,month) {
    return {
      firstOfMonth: new Date(year,month,1).getDay(),
      daysInMonth: new Date(year,month + 1,0).getDate()
    }
  }

  monthNext() {
    const state = {}
    if(this.state.month < 11) {
      state.month = this.state.month + 1
      state.year = this.state.year
    } else {
      state.month = 0
      state.year = this.state.year + 1
    }
    Object.assign(state,this.calculate.call(null, state.year, state.month))
    this.setState(state)
  }

  monthPrev() {
    const state = {}
    if(this.state.month > 0) {
      state.month = this.state.month - 1
      state.year = this.state.year
    } else {
      state.month = 11
      state.year = this.state.year - 1
    }
    Object.assign(state,this.calculate.call(null, state.year, state.month))
    this.setState(state)
  }

  yearNext() {
    const state = {
      year: this.state.year + 1,
      month: this.state.month
    }
    Object.assign(state,this.calculate.call(null, state.year, state.month))
    this.setState(state)
  }

  yearPrev() {
    const state = {
      year: this.state.year - 1,
      month: this.state.month
    }
    Object.assign(state,this.calculate.call(null, state.year, state.month))
    this.setState(state)
  }

  renderHeader() {
    return (
      <CalendarHeader
        monthNames = {this.state.monthNames}
        year = {this.state.year}
        month = {this.state.month}
        monthPrev = {this.monthPrev}
        monthNext = {this.monthNext}
        yearPrev = {this.yearPrev}
        yearNext = {this.yearNext}
      />
    )
  }

  renderWeek() {
    return (
      <CalendarWeek
        dayNames = {this.state.dayNames}
      />
    )

  }

  renderPanel() {
    return (
      <CalendarPanel
        year = {this.state.year}
        month = {this.state.month}
        firstOfMonth = {this.state.firstOfMonth}
        daysInMonth = {this.state.daysInMonth}
        today = {this.state.today}
      />
    )
  }

  render() {
    return (
      <div className='calender-cantainer'>
        {this.renderHeader()}
        {this.renderWeek()}
        {this.renderPanel()}
      </div>
    )
  }
}
