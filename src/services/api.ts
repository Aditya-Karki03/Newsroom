import axios from "axios";

export const sportsNewsApi = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=2edf4362f8364a4cb7bde09cf00dc323`
  );
};
