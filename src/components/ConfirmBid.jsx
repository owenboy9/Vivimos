import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ConfirmBid() {
  const { id } = useParams()
  const [auctionData, setAuctionData] = useState(null)

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

  return (
    <div>
      <h2>Konfirmera bud</h2>
      {/* Display relevant auction data */}
      <p>Auktion: {auctionData.rubrik}</p>
      <button>Lägg ditt bud</button>
    </div>
  )
}

export default ConfirmBid