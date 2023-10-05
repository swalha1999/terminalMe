/**
 * This file contains utility functions for making API requests.
 */

import axios from 'axios';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/swalha1999/repos`,
  );

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};