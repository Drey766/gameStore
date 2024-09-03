import { Discount, Info, Mail, Star } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './GameAbout.css'
import YouTube from 'react-youtube'
import { useStateValue } from '../contextApi/StateProvider'

function GameAbout({summary, id, storyline, name, rating, ratingCount, price, platforms, genres, involvedCompanies, releaseDate, video, cover, languages}) {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    const [{ basket }, dispatch] = useStateValue();
    const [isAdded, setIsAdded] = useState(false);
    const isInBasket = basket.some(item => item.id === id);

    useEffect(() => {
        if(isInBasket) {
        setIsAdded(true)
        } else {
        setIsAdded(false)
        }
    }, [isInBasket])

    const addToBasket = () => {
        if (isInBasket) {
        // If the item is already in the basket, remove it
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
        setIsAdded(false);
        } else {
        // If the item is not in the basket, add it
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
            id: id,
            name: name,
            summary: summary,
            storyline: storyline,
            platforms: platforms,
            genres: genres,
            involvedCompanies: involvedCompanies,
            releaseDate: releaseDate,
            video: video,
            cover: cover,
            price: price
            },
        });
        setIsAdded(true);
    }

    // Toggle the isAdded state
  };
  return (
    <div className='gameAbout'>
        <div className="gameAbout__cont">
            <div className="gameAbout__divs1">
                <h5 className="gameAbout__title">About the Game</h5>
                <div className="gameAbout__about">
                    <p className="gameAbout__summary">{summary}</p>
                    <p className="gameAbout__storyline">{storyline}</p>
                </div>
                <div className="gameAbout__requirements">
                    <h6 className="gameAbout__requirementTitle">Minimum system requirements</h6>
                    <ul className="gameAbout__requirementsCont">
                        <li className="gameAbout__requrement">
                            <span className="gameAbout__requirementName">Operating System</span>
                            <span className="gameAbout__requirementInfo">Window 8, 7, 10</span>
                        </li>
                        <li className="gameAbout__requrement">
                            <span className="gameAbout__requirementName">Processor</span>
                            <span className="gameAbout__requirementInfo">inte i5 - 14700k</span>
                        </li>
                        <li className="gameAbout__requrement">
                            <span className="gameAbout__requirementName">RAM</span>
                            <span className="gameAbout__requirementInfo">8GB</span>
                        </li>
                        <li className="gameAbout__requrement">
                            <span className="gameAbout__requirementName">Graphics</span>
                            <span className="gameAbout__requirementInfo">AMD Sapphire rx 580 nitro+</span>
                        </li>
                        <li className="gameAbout__requrement">
                            <span className="gameAbout__requirementName">Direct X</span>
                            <span className="gameAbout__requirementInfo"> Direct X 11, 12</span>
                        </li>
                        <li className="gameAbout__requrement">
                            <span className="gameAbout__requirementName">Hard Drive</span>
                            <span className="gameAbout__requirementInfo">50 GB</span>
                        </li>
                    </ul>
                </div>
                <div className="gameAbout__videoCont">
                    <YouTube videoId={video} opts={opts} className='gameAbout__video' />
                </div>
                
            </div>

            <div className="gameAbout__divs2">
                <div className="gameAbout__divs2Cont">
                    <div className="gameAbout__buyCont">
                        <Button
                            className={isAdded ? 'gameAbout__addToCart added': 'gameAbout__addToCart'}
                            id='gameAbout__addToCart'
                            onClick={addToBasket}
                            >
                            {isAdded ? 'Added' : 'Add to Cart'}
                        </Button>
                        <span className="gameAbout__price">
                            ${price ? price.toFixed(2) : 10.15}
                        </span>
                    </div>
                    <div className="gameAbout__divs2Cont2">
                        <div className="gameAbout__gameName">{name}</div>
                        <ul className="gameAbout__divs2MainInfoCont">
                            <li className="gameAbout__divs2MainInfo">
                                <span className="gameAbout__divs2MainInfoIcon"><Info /></span>
                                <span className="gameAbout__divs2MainInfoDetail">Platform: {platforms}</span>
                            </li>
                            <li className="gameAbout__divs2MainInfo">
                                <span className="gameAbout__divs2MainInfoIcon"><Star  style={{color: 'gold'}}/> </span>
                                <span className="gameAbout__divs2MainInfoDetail"><span className="gameAbout__rating">{(rating / 10).toFixed(1)}</span> from {ratingCount} ratings</span>
                            </li>
                            <li className="gameAbout__divs2MainInfo">
                                <span className="gameAbout__divs2MainInfoIcon"><Mail /> </span>
                                <span className="gameAbout__divs2MainInfoDetail">Instant Digital Delivery</span>
                            </li>
                        </ul>
                        <ul className="gameAbout__divs2MainInfoCont2">
                            <li className="gameAbout__divs2MainInfo2"><span className='gameAbout__divs2MainInfo2Span1'>Platform:</span> <span className='gameAbout__divs2MainInfo2Span2'>{platforms}</span></li>
                            <li className="gameAbout__divs2MainInfo2"><span className='gameAbout__divs2MainInfo2Span1'>Genres:</span> <span className='gameAbout__divs2MainInfo2Span2'>{genres}</span></li>
                            <li className="gameAbout__divs2MainInfo2"><span className='gameAbout__divs2MainInfo2Span1'>Publishers:</span> <span className='gameAbout__divs2MainInfo2Span2'>{involvedCompanies}</span> </li>
                            <li className="gameAbout__divs2MainInfo2"><span className='gameAbout__divs2MainInfo2Span1'>Languages:</span> <span className='gameAbout__divs2MainInfo2Span2'>{languages}</span> </li>
                            <li className="gameAbout__divs2MainInfo2"><span className='gameAbout__divs2MainInfo2Span1'>Release date:</span> <span className='gameAbout__divs2MainInfo2Span2'>{releaseDate}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}


  
  export default GameAbout;