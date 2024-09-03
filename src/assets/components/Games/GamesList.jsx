import React, { useEffect, useState } from 'react';
import Game from '../FirstDiv/Game';
import './GamesList.css';
import { CircularProgress } from '@mui/material';
import { useStateValue } from '../contextApi/StateProvider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const itemsPerPage = 40;

function GamesList() {
  const [{games}] = useStateValue()
  const [newGames, setNewGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [{ category, searchQuery }, dispatch] = useStateValue();

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 27,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 18,
      slidesToSlide: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 7,
      slidesToSlide: 5
    },
  };

  

  useEffect(() => {
    setIsLoading(true);
    let filteredGames = games;

    // Filter games based on category
    if (category === 'All') {
      filteredGames = games;
      dispatch({ type: 'SET_SEARCH_QUERY', item: '' });
    } else if (Array.isArray(category) && category.includes('PC (Microsoft Windows)')) {
      filteredGames = games.filter((game) =>
        game.game.platforms?.some((platform) => platform.name === 'PC (Microsoft Windows)')
      );
      dispatch({ type: 'SET_SEARCH_QUERY', item: '' });
    } else if (Array.isArray(category)) {
      filteredGames = games.filter((game) => {
        return game.game.platforms?.some((platform) => category.includes(platform.name));
        dispatch({ type: 'SET_SEARCH_QUERY', item: '' });
      });
    } else {
      filteredGames = games.filter((game) => {
        return game.game.genres?.some((genre) => genre.name === category);
        dispatch({ type: 'SET_SEARCH_QUERY', item: '' });
      });

      
    }

    // Remove duplicates based on game ID
    filteredGames = filteredGames.filter(
      (game, index, self) => index === self.findIndex((t) => t.game.id === game.game.id)
    );

    setNewGames(filteredGames);
    setCurrentPage(1);
    setActivePage(1);
    setIsLoading(false);
  }, [category]);

  useEffect(() => {
    if (searchQuery) {
      const searchedGames = newGames.filter((game) =>
        game.game.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setNewGames(searchedGames);
    }
  }, [searchQuery, newGames]);



  const totalPages = Math.ceil(newGames.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = newGames.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading__nav">
          <CircularProgress className="loading" />
        </div>
      ) : (
        <div className="gamesList">
          <div className="gamesList__cont">
            {currentGames.map((game) => (
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
          </div>
          <div className="gameList__navigation">
            <Carousel
              responsive={responsive}
              showDots={false}
              className="gameList__carousel"
              arrows={true}
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={activePage === page ? 'activePage' : ''}
              >
                {page}
              </button>
            ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}

export default GamesList;