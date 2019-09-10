import axios from 'axios';

// const API_URL = 'https://hn.algolia.com/api/v1/search?query=';
axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react';

export const fetchArticlesInServices = (query = DEFAULT_QUERY) => {
  const searchQuery = query ? `/articles?category=${query}` : '/articles';
  return axios.get(searchQuery);
};

export const w = () => {};
