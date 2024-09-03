import React from 'react'
import './Game.css'
import { Link } from 'react-router-dom'

function Game({name,image,developer, id, price}) {
  return (
    <Link to='../gamedetails' className='game__Link' state={{
      game: {
        id: id,
        name: name,
        image: image,
        developer: developer,
        price: price,

  }
}}>
      <div className='game'>
          <div className='game__imageDiv'><img src={image} alt="game image" className='game__img' /></div>
          <div className="game__info">
              <span className="game__name">{name}</span>
              <span className="game__developer">{developer}</span>
              <span className="game__price">${price ? price.toFixed(0) : 10}</span>
          </div>
      </div>
    </Link>
  )
}

export default Game
