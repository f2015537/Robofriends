import React,{ Component } from 'react'
import RobotList from './components/RobotList'
import SearchBox from './components/SearchBox'
import { robots } from './robots'
import './App.css'

export default class App extends Component {
  state = {
    robots,
    searchField:  ''
  }
  
  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc'>
      <h1 className='f1'>Robofriends</h1>
      <SearchBox onSearchChange={this.onSearchChange}/>
      <RobotList robots={filteredRobots}/>
      </div>
    )
  }
}
