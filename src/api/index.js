import 'whatwg-fetch'
const qs = require('qs')

export default class Client {

  static ROOT = 'https://api.github.com'

  constructor(options = {}) {
  	this.user = options.user
  	this.repo = options.repo

  	if(options.token) {
  	  this.token = options.token
  	}
  }

  static getUrl(url, query) {
  	let result = Client.ROOT + url
  	if(query) {
  		result = result + '?' + qs.stringify(query)
  	}
  	return result
  }

  static request(url, reqArgs = {}) {
  	const args = reqArgs
  	if(this.token) {
  	  args.access_token = this.token.split('#').join('')
  	}
  	args.headers = Object.assign({}, args.headers, {
  	  Accept: 'application/vnd.github.v3.html+json'
  	})
  	return fetch(url, args)
  	  .then(res => {
  	  	if(res.status < 200 || res.status >= 300) {
  	  		const err = new Error(res.statusText)
  	  		err.name = 'GithubRequestError'
  	  		err.response = res
  	  		throw err
  	  	}
  	  	return res
  	  })
  	  .then(res => {
  	  	return res.json()
  	  })
  }

  static convertPost(post = {}) {
  	return {
  	  id: post.id,
  	  number: post.number,
  	  title: post.title,
  	  html: post.body_html,
  	  createdAt: post.created_at
  	}
  }

  listPosts(args) {
  	const url = Client.getUrl(`/repos/${this.user}/${this.repo}/issues`)
  	return Client.request(url, args).then(data => {
  	  return data.map(item => Client.convertPost(item))
  	})
  }
}
