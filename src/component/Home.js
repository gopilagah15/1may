import React from 'react'
 
import Notes from './Notes'

const Home = (props) => {
  const {showAlert} = props
  return (
    <div>
    <div className="container me2">
      <h1 className='inot'>Add a note</h1>
    </div>
   
     
   <Notes showAlert={showAlert}/> 
    </div>
    
  )
}

export default Home
