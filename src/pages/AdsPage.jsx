import React, { useState, useEffect, useContext } from 'react'


function AdsPage() {
  const [ads, setAds] = useState([])

  useEffect(() => {
    async function load() {
      let data = await fetch("/api/db.json")
      data = await data.json()
      setAds(data)
    }
    load()
  }, [])
}

