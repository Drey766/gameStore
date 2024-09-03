import React from 'react'
import Header from '../FirstDiv/Header'
import Categories from '../Games/Categories'
import GamesNav from '../Games/GamesNav'
import './Games.css'
import GamesList from '../Games/GamesList'
import Footer from '../FirstDiv/Footer'

function Games() {
  return (
    <div className='games'>
      <Header />
      <div className="games__main">
        <Categories />
        <div className="games__games">
          <GamesNav />
          <GamesList />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Games