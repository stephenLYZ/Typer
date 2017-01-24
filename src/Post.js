import React, { Component } from 'react'
import Content from './components/contents/Content'
import Footer from './components/footer'

export default class Post extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    posts: React.PropTypes.array,
  }

  constructor(props) {
    super(props)

    const post = this.fetchPost(props.params.id, props.posts)
    this.state = { post }
    document.title = post.title || ''
  }

  componentWillReceiveProps(nextProps) {
    const post = this.fetchPost(nextProps.params.id, nextProps.posts)
    this.setState({ post })
    document.title = post.title || ''
  }

  fetchPost(postId, posts) {
    let post = {}
    for (const item of posts) {
      if (String(item.id) === postId) {
        post = item
      }
    }
    return post
  }

  render() {
    return (
      <div>
        <Content post={this.state.post} />
        <Footer />
      </div>
    )
  }
}
