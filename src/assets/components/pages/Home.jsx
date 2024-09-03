import React, { useEffect, useState } from 'react'
import FirstDiv from '../FirstDiv/FirstDiv'
import './Home.css'
import CarouselFunc from '../FirstDiv/Carousel'
import Header from '../FirstDiv/Header'
import Navigation from '../FirstDiv/Navigation'
import Extras from '../FirstDiv/Extras'
import Footer from '../FirstDiv/Footer'
import { CircularProgress } from '@mui/material'
import { useStateValue } from '../contextApi/StateProvider'


function Home() {
  const [sellers, setSellers] = useState([])
  const [rating, setRating] = useState([])
  const [shooter, setShooter] = useState([])
  const [highlightGames, setHighlights] = useState([])
  const [highlightGames2, setHighlights2] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [{games}, dispatch] = useStateValue()

  useEffect(() => {
    const uniqueGames = games.filter(
      (game, index, self) =>
        index === self.findIndex((t) => t.game.id === game.game.id) && game.game.genres?.length > 0 && game.game.genres[0].name === 'Shooter'
    );
    setRating(games.sort((a, b) => b.game.rating_count - a.game.rating_count).slice(0, 50).filter(
      (game, index, self) =>
        index === self.findIndex((t) => t.game.id === game.game.id)
    ));
    setSellers(games.sort((a, b) => b.game.aggregated_rating - a.game.aggregated_rating).slice(0, 50).filter(
      (game, index, self) =>
        index === self.findIndex((t) => t.game.id === game.game.id)
    ));
    setShooter(uniqueGames.slice(0, 50))
    setHighlights(uniqueGames.slice(0, 5))
    setHighlights2(uniqueGames.slice(6, 11))
    if (games.length !==0) {
      setIsLoading(false)
    }

  }, [])

  return (
    <main className='home'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="home__container">
          <Header />
          <Navigation />
          <FirstDiv highlights={highlightGames} />
          <CarouselFunc title='best Seller' data={sellers} />
          <CarouselFunc title='best rated' data={rating} />
          <FirstDiv highlights={highlightGames2} />
          <CarouselFunc title='shooters' data={shooter} />
          <Extras data={highlightGames} />
          <CarouselFunc title='Pre orders' data={sellers} />
          <Footer />
        </div>
      )}
    </main>
  )
}

export default Home
