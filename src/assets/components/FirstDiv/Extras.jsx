import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './Extras.css'
import { CircularProgress } from '@mui/material';

function Extras({ data }) {
  const [games, setGames] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setGames(data);
    setLoading(false)
  }, [])

  console.log('extraDat', games)

  const handleNext = () => {
    if (currentIndex === games.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(games.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section className='extras'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="extras__cont">
          <div className="extras__divs">
            <div className="extras__divsCont">
              {games.length > 0 && (
                <>
                  <div className="extras__titleDiv">
                    <h4 className="extras__title">{games[currentIndex].game.name}</h4>
                    <span className="extras__readMore">Read more</span>
                  </div>
                  <p className="extras__p">{games[currentIndex].game.summary}</p>
                  <div className="extras__info">
                    <Button className='extras__reviewButton'>Review</Button>
                    <span className="extras__review">{parseFloat((games[currentIndex].game.rating / 10)).toFixed(1)} of 10!</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="extras__divs">
            <div className="extras__divsCont">
              <div className="extras__titleDiv2">
                <h4 className="extras__title">Accesories for Game Consoles</h4>
              </div>
              <ul className="extras__accesories">
                <li className="extras__accesory">Gamepads</li>
                <li className="extras__accesory">Wireless Headsets</li>
                <li className="extras__accesory">payment Cards</li>
                <li className="extras__accesory">Charging stations</li>
                <li className="extras__accesory">batteries</li>
              </ul>
              <div className="extras__info">
                <Button className='extras__reviewButton'>Buy</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Extras