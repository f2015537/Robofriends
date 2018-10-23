import React from 'react'
import Card from './Card'


const RobotList = ({robots}) => {
  if(true) {
    throw new Error('Something terrible happened!')
  }
const robotList = robots.map((robot,i) => {
    return (
    <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={robots[i].id}/>
    )
})
return (
    <div>
      { robotList }
    </div>
  )
}

export default RobotList