import React from 'react'

const SearchBox = (props) => {
  
    return (
      <div className='pa2'>
        <input onChange={props.onSearchChange} type='search' placeholder='search robots'className='pa3 ba b--green bg-lightest-blue'/>
      </div>
    )
  
}

export default SearchBox
