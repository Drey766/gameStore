import React, { useEffect, useState } from 'react';
import { fetchGameData } from './igdbApi';

function GameList() {
  const [games, setGames] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNextGames = async () => {
    setIsLoading(true);
    try {
      const data = await fetchGameData(500, offset);
      setGames((prevGames) => [...prevGames, ...data]);
      setOffset(offset + 500);
      console.log('games',games)
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNextGames();
  }, []);

  if (!Array.isArray(games)) {
    console.error('Invalid data format:', games);
    return null;
  }

  return (
    <div>
      <h2>Game List</h2>
      <ul> 
        {games.map(game => ( 
          <li key={game.id}> 
            <h3>{game.name}</h3> 
            <p>Description: {game.summary}</p> <p>Release Date: {game.release_dates[0].human}</p> 
          </li> ))} </ul> 
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={fetchNextGames}>Load More Games</button>
      )}
    </div>
  );
}

export default GameList;