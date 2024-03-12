import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'

function ConfirmBid() {

  const { id } = useParams()
  const [auctionData, setAuctionData] = useState(null)
  const { activeUser, setActiveUser} = useContext(GlobalContext)

  useEffect(() => {
    // Fetch auction data based on adId
    const fetchAuctionData = async () => {
      try {
        const response = await fetch(`/api/ads/${id}`)
        const data = await response.json()
        setAuctionData(data)
      } catch (error) {
        console.error('Error fetching auction data:', error)
      }
    };

    fetchAuctionData();
  }, [id])

  if (!auctionData) {
    return <div>Laddar...</div>
  }

  const handleBidClick = () => {
    if (activeUser.loggedIn) {
      saveBid(activeUser, auctionData)
      alert('Ditt bud har sparats.')
    }
    else {
      alert('Du måste logga in för att kunna lägga ett bud.')
    }
   
  }

  return (
    <div>
      <h2>Konfirmera bud</h2>
      <p>Auktion: {auctionData.id}</p>
      <button onClick={handleBidClick}>Lägg ditt bud</button>
    </div>
  )
}

function saveBid(activeUser, auctionData) {
  console.log('saving bid')
  console.log(auctionData.bids)
  const existingBids = auctionData.bids
  console.log(existingBids)
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bids: [...existingBids, activeUser.id], // assuming existingBids is an array containing previous bids
    }),
  };
  
  fetch(`/api/ads/${auctionData.id}`, requestOptions)
    .then(response => response.json())    
    .then(data => console.log('Bid added:', data))
    .catch(error => console.error('Error adding bid:', error));
}

export default ConfirmBid