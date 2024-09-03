import { Search } from '@mui/icons-material';
import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import './GamesNav.css';
import { useStateValue } from '../contextApi/StateProvider';

function GamesNav() {
  const [{ category }, dispatch] = useStateValue();
  const [searchQuery, setSearchQuery] = useState('');
  const [cat, setCat] = useState('Games');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    dispatch({ type: 'SET_SEARCH_QUERY', searchQuery: query });
  };

  React.useEffect(() => {
    if (Array.isArray(category)) {
      setCat(category.join(', '));
    } else {
      setCat(category);
    }
  }, [category]);

  return (
    <div className="gamesNav">
      <div className="gamesNav__cont">
        <div className="gamesNav__active">
          {cat}
          <span className="gamesNav__dot"></span>
        </div>
        <div className="gamesNav__searchDiv">
          <Input
            type="input"
            className="gamesNav__search"
            placeholder="Search Game"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button className="gamesNav__button">
            <Search className="gamesNav__searchIcon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GamesNav;