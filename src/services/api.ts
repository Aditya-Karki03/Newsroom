import axios from "axios";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const sportsNewsApi = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${VITE_API_KEY}`
  );
};

export const allNewsApi = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${VITE_API_KEY}`
  );
};

export const allBusinessNewsApi = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${VITE_API_KEY}`
  );
};
