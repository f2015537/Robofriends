import React,{ Component } from 'react'
import { connect } from 'react-redux'
import RobotList from '../components/RobotList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from './ErrorBoudary'
import './App.css'
import { setSearchField } from '../actions/searchActions'
import { requestRobots } from '../actions/ajaxActions'

 class App extends Component {
  componentDidMount(){
    this.props.onRequestRobots()
  }
  
  render() {
    const { searchField,onSearchChange,robots,isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
       <h1 className='tc'>Loading</h1> :
     (
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
  searchField: state.search.searchField,
  robots: state.ajax.robots,
  isPending: state.ajax.isPending,
  error: state.ajax.error
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

export default connect(mapStateToProps,mapDispatchToProps)(App)