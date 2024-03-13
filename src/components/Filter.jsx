import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../GlobalContext"

function Filter() {
  const { ads, setAds } = useContext(GlobalContext)
  const { filteredAds, setFilteredAds } = useContext(GlobalContext)
  console.log(ads)

  function filter(e) {
    let input = e.target.value
    setFilteredAds(ads.filter(item => 
      item.rubrik.includes(input) ||
      item.län.includes(input) ||
      item.barn.includes(input) ))
  }

  return (
    <div className='filter-container'>
      <search>
        <input type="text" onChange={filter} placeholder='Sök auktion'></input>
      </search>
    </div>
  )

}

export default Filter