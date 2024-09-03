// igdbApi.js
import axios from 'axios';

const API_URL = 'https://api.igdb.com/v4/games';
const API_KEY = '5i3ylz06sfyxyqqyd7ck8wz4aaade1';
const ACCESS_TOKEN = 'ptkmome1eg2ow5uz8js1h1zlt2aaf1';

export const fetchGameData = async (offset, limit) => {
  const headers = {
    'Client-ID': API_KEY,
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Accept': 'application/json'
  };
  const requestBody = `fields age_ratings.rating,aggregated_rating,aggregated_rating_count,alternative_names.name,artworks.url,bundles,category,checksum,collection,collection.games,collection.name,collections.name,cover.url,cover.width,cover.height,created_at,dlcs,expanded_games,expansions,external_games.name,first_release_date,follows,forks,franchise,franchises.name,game_localizations.name,game_modes.name,genres.name,hypes,involved_companies.company.name,keywords.name,language_supports.language.name,multiplayer_modes,name,parent_game,platforms.name,player_perspectives.name,ports,rating,rating_count,release_dates.human,remakes,remasters,screenshots.url,similar_games.name,slug,standalone_expansions,status,storyline,summary,tags,themes.name,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.name,videos.video_id,websites.url; limit ${limit}; offset ${offset}; sort total_rating_count desc;`;

  try {
    const response = await axios.post(API_URL, requestBody, { headers });
    const games = response.data;
    return games;
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw error;
  }
};