// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/pages/Home';
import Games from './assets/components/pages/Games';
import GameDetails from './assets/components/pages/GameDetails';
import './App.css';
import Cart from './assets/components/redux/Cart';
import { useStateValue } from './assets/components/contextApi/StateProvider';
import { CircularProgress } from '@mui/material';
import game1 from './data/games1.json'
import games2 from './data/games2.json'
import games3 from './data/games3.json'
import games4 from './data/games4.json'
import games5 from './data/games5.json'
import games6 from './data/games6.json'
import games7 from './data/games7.json'
import games8 from './data/games8.json'
import games9 from './data/games9.json'
import games10 from './data/games10.json'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [{ games }, dispatch] = useStateValue();

  const fetchNextGames = () => {
    setIsLoading(true);
  
    // Array containing all the JSON files
    const gameFiles = [game1, games2, games3, games4, games5, games6, games7, games8, games9, games10];
  
    // Flatten all the JSON files into a single array
    const allGames = gameFiles.flatMap(gameFile => gameFile);
  
    // Sort the games by their IDs (assuming higher IDs are newer games)
    allGames.sort((a, b) => b.id - a.id);
  
    // Load the first 1000 games initially
    const initialGames = allGames.slice(0, 1000);
    initialGames.forEach(game => {
      const gameExists = games.some(existingGame => existingGame.id === game.id);
      if (!gameExists) {
        dispatch({ type: 'ADD_GAMES', item: { game } });
      }
    });
  
    // Load the remaining games after the initial batch has been loaded
    const remainingGames = allGames.slice(1000);
    setTimeout(() => {
      remainingGames.forEach(game => {
        const gameExists = games.some(existingGame => existingGame.id === game.id);
        if (!gameExists) {
          dispatch({ type: 'ADD_GAMES', item: { game } });
        }
      });
      setIsLoading(false);
    }, 1000); // Adjust the delay as per your requirement
  };

  console.log('basketGames', games);
  useEffect(() => {
    fetchNextGames();
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/games" element={<Games />} />
            <Route exact path="/gamedetails" element={<GameDetails />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;