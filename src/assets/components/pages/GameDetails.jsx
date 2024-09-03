import React, { useEffect, useState } from 'react';
import Header from '../FirstDiv/Header';
import GamePictures from '../gameDetails/GamePictures';
import GameAbout from '../gameDetails/GameAbout';
import CarouselFunc from '../FirstDiv/Carousel';
import Footer from '../FirstDiv/Footer';
import { CircularProgress } from '@mui/material';
import { useLocation } from 'react-router';
import { useStateValue } from '../contextApi/StateProvider';

function GameDetails() {
  const [{games}] = useStateValue();
  const [games2, setGames2] = useState({ platforms: [] });
  const [similarGames, setSimilarGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { state } = location;
  const gameData = state && state.game;

  useEffect(() => {
    if (gameData) {
      const selectedGame = games.find((g) => g.game.id === gameData.id);
      setGames2(selectedGame || { platforms: [] });
      console.log('selectedGame',selectedGame)
      setIsLoading(false);

      if (selectedGame.game && selectedGame.game.similar_games) {
        const similarGamesData = selectedGame.game.similar_games.map((gameId) => {
          const game = games.find((g) => g.game.id === gameId.id);
          return game;
        });
        setSimilarGames(similarGamesData);
      }
    } else {
      setIsLoading(false);
    }
    window.scrollTo(0, 0);
    console.log('games2',games2)
  }, [gameData]);

  console.log('games4',games2)

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="gameDetails">
          <Header />
          <GamePictures
            title={games2.game.name}
            mainImage={games2.game.artworks?.[0] ? games2.game.artworks?.[0]?.url.replace('/t_thumb/', '/t_screenshot_big/') : games2.game.cover.url.replace('/t_thumb/', '/t_screenshot_big/')}
            image1={games2.game.screenshots?.[0]?.url.replace('/t_thumb/', '/t_screenshot_big/')}
            image2={games2.game.screenshots?.[1]?.url.replace('/t_thumb/', '/t_screenshot_big/')}
            image3={games2.game.screenshots?.[2]?.url.replace('/t_thumb/', '/t_screenshot_big/')}
          />
          <GameAbout
            summary={games2.game.summary}
            id={games2.game.id}
            storyline={games2.game.storyline}
            name={games2.game.name}
            rating={games2.game.rating}
            ratingCount={games2.game.rating_count}
            price={games2.game.aggregated_rating}
            genres={games2.game.genres?.map((genre) => genre.name).join(', ') || 'N/A'}
            platforms={games2.game.platforms?.map((platform) => platform.name).join(', ') || 'N/A'}
            languages={games2.game.language_supports?.map((language) => language.language.name).splice(0, 10).join(', ') || 'N/A'}
            releaseDate={games2.game.release_dates?.[0]?.human}
            involvedCompanies={games2.game.involved_companies?.map((company) => company.company.name).join(', ') || 'N/A'}
            video={games2.game.videos?.[0]?.video_id}
            cover={games2.game.cover.url.replace('/t_thumb/', '/t_cover_big/')}
          />
          <CarouselFunc title="Similar Games" data={similarGames} className='hide' />
          <Footer />
        </div>
      )}
    </>
  );
}

export default GameDetails;