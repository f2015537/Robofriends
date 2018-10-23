import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    return (
      <div className='pa2'>
        <input onChange={this.props.onSearchChange} type='search' placeholder='search robots'className='pa3 ba b--green bg-lightest-blue'/>
      </div>
    )
  }
}
