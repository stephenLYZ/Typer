import React, { Component } from 'react'
import { Link } from 'react-router'

export default class CalendarPanel extends Component {
  constructor(props) {
    super(props)
  }

  postTimeFormat(post) {
    const time = post.createdAt.split('T')[0]
  	return {
      postYear: time.split('-')[0],
      postMonth: time.split('-')[1],
      postDay: time.split('-')[2]
    }
  }

  renderOffset() {
  	const {firstOfMonth} = this.props
  	const offsetArray = []


  	for (let i = 0 ; i < firstOfMonth; i++) {
  	  offsetArray[i] = i
  	}

  	return offsetArray.map((item,i) => {
  	  return (
  	  	<div className="date-cell" key={i}></div>
  	  )
  	})

  }

  renderDays() {
  	const { daysInMonth,today,month,year,posts } = this.props
  	const _month = new Date().getMonth()
  	const _year = new Date().getFullYear()
    let dayArray = []
    let postIds = []
    let postTimes = posts.map(post => this.postTimeFormat(post))
    let isAbled = false

    for (let i = 0 ; i < daysInMonth; i++) {
  	  dayArray[i] = i + 1
  	}

  	return  dayArray.map((item, i) => {

      isAbled = false

      for(let i = 0;i < postTimes.length;i++){
        if(postTimes[i].postDay == item && postTimes[i].postYear == year && postTimes[i].postMonth-1 == month){
          isAbled = true
          postIds[item] = posts[i].id
          break
        }
      }

      if(isAbled &&  _year === year && _month === month && item === today ) {
        return (
            <Link to={`/post/${postIds[item]}`} key={i}>
              <div className='date-cell today button'>{item}</div>
            </Link>
          )
      } else if( isAbled ) {
        return (
            <Link to={`/post/${postIds[item]}`} key={i}>
              <div className='date-cell button'>{item}</div>
            </Link>
          )
      } else if( _year === year && _month === month && item === today ){
        return (<div className='date-cell today' key={i}>{item}</div>)
      } else {
        return ( <div className='date-cell' key={i}>{item}</div> )
      }
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
