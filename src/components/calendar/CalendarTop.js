import React, { Component } from 'react'

export default class CalendarTop extends Component {
  constructor(props) {
    super(props)
  }

  getWeekDay(year, month, day) {
    return new Date(year, month, day).getDay()
  }

  render() {
    const { today, fullDayNames } = this.props
    const _month = new Date().getMonth()
  	const _year = new Date().getFullYear()
    const dayNum = this.getWeekDay(_year, _month, today)

    return (
      <div className="calendar-top">
        <p>{ today }</p>
        <p>{ fullDayNames[dayNum] } </p>
      </div>
    )
  }
}
