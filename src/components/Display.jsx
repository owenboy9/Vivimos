import React, { useEffect, useState } from "react";

const Display = () => {
  const [ads, setAds] = useState([]);
  const [DisplayItems, setDisplayItems] = useState([])
}

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/Auctions.json");
      const data = await response.json();
    } catch (error) {
    }
  }
})