import React from 'react'
import BrowsProfile from './HomeComputent/BrowsProfile'
import Membership from './HomeComputent/Membership'
import VipService from './HomeComputent/VipService'
import Banner from './HomeComputent/banner/Banner'
import Gallery from './HomeComputent/gallery/Gallery'
import BestPartner from './HomeComputent/BestPartner'
import Choice from './HomeComputent/Choice'



function Home() {
  return (
    <div>
      <Banner></Banner>
      <BestPartner></BestPartner>
      <Choice></Choice>
      <Membership></Membership>
      <VipService></VipService>
    <BrowsProfile></BrowsProfile>
    <Gallery></Gallery>
  
    </div>
  )
}

export default Home