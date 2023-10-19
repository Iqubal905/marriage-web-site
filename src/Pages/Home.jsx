import React from 'react'
import BrowsProfile from './HomeComputent/BrowsProfile'
import Membership from './HomeComputent/Membership'
import VipService from './HomeComputent/VipService'

function Home() {
  return (
    <div>
      <div><h1>This is Home</h1></div>
      <Membership></Membership>
      <VipService></VipService>
    <BrowsProfile></BrowsProfile>
    
    </div>
  )
}

export default Home