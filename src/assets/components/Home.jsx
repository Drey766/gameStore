import React, { useEffect, useState } from 'react';
import { fetchGameData } from './igdpApi';

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
        {games.map((game) => {
          // ... (existing game details rendering code)
        })}
      </ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={fetchNextGames}>Load More Games</button>
      )}
    </div>
  );
}

export default GameList;