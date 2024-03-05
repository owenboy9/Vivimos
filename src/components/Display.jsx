import React, { useEffect, useState } from "react";

const Display = () => {
  const [ads, setAds] = useState([]);
  const [DisplayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/auctions.json");
        const data = await response.json();
        setAds(data.Auctions);
        setDisplayItems(data.Auctions);
      } catch (error) {
        console.error("Erroe reading data:", error);
        setAds([]);
        setDisplayItems([]);
      }
    };
    
    fetchData();
  }, []);

};

export default Display;