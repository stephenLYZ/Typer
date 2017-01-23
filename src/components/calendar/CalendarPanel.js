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
    let postTime = posts.map(post => this.postTimeFormat(post))

    console.log(postTime[0]['postDay'])

  	// for (let i = 0 ;i < postTime.length; i++) {
    //   for(let j = 0 ; j < daysInMonth ; j++){
    //     console.log(postTime[i].postYear == year && (postTime[i].postMonth-1) == month && postTime[i].postDay == j+1)
    //     if(postTime[i].postYear == year && (postTime[i].postMonth-1) == month && postTime[i].postDay == j+1){
    //       dayArray[j] = 'isabled'
    //     } else {
    //       dayArray[j] = j + 1
    //     }
    //     // console.log(dayArray[j])
    //   }
  	// }


  	return  dayArray.map((item, i) => {
      console.log(item)
      return (
  	  	 _year === year && _month === month && item === 'isabled' ?
  	  	   <div className='date-cell button' key={i}>{i + 1}</div>
  	  	   : _year === year && _month === month && item === today ?
           <div className='date-cell today' key={i}>{item}</div>
           : <div className='date-cell' key={i}>{item}</div>
  	  )


          // <Link to={`/post/${post.id}`}>

            // <div className='date-cell button' key={i}>{item}</div>
          // </Link>
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
