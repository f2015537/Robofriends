import React,{ Component } from 'react'
import { connect } from 'react-redux'
import RobotList from '../components/RobotList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from './ErrorBoudary'
import './App.css'
import { setSearchField } from '../actions/searchActions'

 class App extends Component {
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({
      robots: json
    }))
  }
  
  state = {
    robots: []
  }
  
  render() {
    const { robots } = this.state
    const { searchField,onSearchChange } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if(this.state.robots.length === 0) 
      return <h1 className='tc'>Loading</h1>
    return (
      <div className='tc'>
      <h1 className='f1'>Robofriends</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundary>
         <RobotList robots={filteredRobots}/>
         </ErrorBoundary>
      </Scroll>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchField: state.search.searchField
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)