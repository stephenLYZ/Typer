import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <a href="https://github.com/stephenLYao/Typer" target="_blank">Typer</a> . Powered with <span>♥</span> by GitHub & React 
      </footer>
    )
  }
}
