import React from 'react'
import SpaceItem from '../screens/allList/SpaceItem'
import './Homecards.css'

const Homecards = () => {
  return (
    <div>
      <SpaceItem />
      <div className='cont'><div className='seeMore'><h2>See All Listings</h2></div></div>
    </div>
  )
}

export default Homecards