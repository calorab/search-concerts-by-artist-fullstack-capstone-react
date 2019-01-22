export const API_SEARCH_URL =
      process.env.REACT_APP_API_SEARCH_URL || 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
//CALEB - change this to work ({artist_id})***
export const API_CONCERTS_URL =
      process.env.REACT_APP_API_CONCERTS_URL || 'https://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey=';
