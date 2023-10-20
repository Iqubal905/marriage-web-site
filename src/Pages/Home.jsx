import React from 'react'
import BrowsProfile from './HomeComputent/BrowsProfile'
import Membership from './HomeComputent/Membership'
import VipService from './HomeComputent/VipService'
import Banner from './HomeComputent/banner/Banner'
import Gallery from './HomeComputent/gallery/Gallery'



function Home() {
  return (
    <div>
      <Banner></Banner>
      <Membership></Membership>
      <VipService></VipService>
    <BrowsProfile></BrowsProfile>
    <Gallery></Gallery>
  
    </div>
  )
}

export default Home