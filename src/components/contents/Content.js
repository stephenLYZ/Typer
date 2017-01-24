import React, { Component } from 'react'

import './content.scss'

export default class Content extends Component {
  static propTypes = {
    post: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props
    console.log(post)
    return (
      <div className="content-container">
        <h2>{ post.title }</h2>
        <div className="markdown-body" dangerouslySetInnerHTML={{__html: post.html}}></div>
      </div>
    )
  }
}
