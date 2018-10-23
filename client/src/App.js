import React,{ Component } from 'react'
import RobotList from './components/RobotList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import ErrorBoundary from './components/ErrorBoudary'
import './App.css'

export default class App extends Component {
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({
      robots: json
    }))
  }
  
  state = {
    robots: [],
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
    if(this.state.robots.length === 0) 
      return <h1 className='tc'>Loading</h1>
    return (
      <div className='tc'>
      <h1 className='f1'>Robofriends</h1>
      <SearchBox onSearchChange={this.onSearchChange}/>
      <Scroll>
        <ErrorBoundary>
         <RobotList robots={filteredRobots}/>
         </ErrorBoundary>
      </Scroll>
      </div>
    )
  }
}
