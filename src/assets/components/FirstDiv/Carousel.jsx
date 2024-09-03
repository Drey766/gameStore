import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Game from './Game';
import './Carousel.css';
import { CircularProgress } from '@mui/material';
import { ArrowForward, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function CarouselFunc({ title, data, className }) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get a list of unique games from gamesJson
    setGames(data.filter(game => game && game.game.id && game.game.name && game.game.cover && game.game.cover.url && game.game.involved_companies));
    setIsLoading(false);
  }, [data]);

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <section className="carousel">
          <div className="carousel__cont">
            <div className="carousel__title">
              <span className="carousel__heading">{title}</span>
              <Link to='../games' className={`carousel__link ${className}`}><span className="carousel__viewMore">View More <ArrowForward /> </span></Link>
            </div>
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={false}
              renderButtonGroupOutside={true}
              autoPlay={true}
              infinite={true}
              className='carousel__carousel'
            >
              {games.map((game) => (
                <Game
                  key={game.game.id}
                  id={game.game.id}
                  name={game.game.name}
                  image={game.game.cover.url.replace('/t_thumb/', '/t_cover_big/')}
                  developer={
                    game.game.involved_companies && game.game.involved_companies.length > 0
                      ? game.game.involved_companies[0].company.name
                      : 'Unknown Developer'
                  }
                  price={game.game.aggregated_rating}
                />
              ))}
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
}

export default CarouselFunc;