import axios from "axios";
import { IQuery } from "../interfaces/interface";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const sportsNewsApi = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=sports`,
    {
      headers: {
        Authorization: VITE_API_KEY,
      },
    }
  );
};

export const allNewsApi = () => {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=us`, {
    headers: {
      Authorization: VITE_API_KEY,
    },
  });
};

export const allBusinessNewsApi = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=business`,
    {
      headers: {
        Authorization: VITE_API_KEY,
      },
    }
  );
};

export const allTechNewsApi = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology`,
    {
      headers: {
        Authorization: VITE_API_KEY,
      },
    }
  );
};

export const searchNewsApi = (data: IQuery) => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${data?.query}&sortBy=popularity`,
    {
      headers: {
        Authorization: VITE_API_KEY,
      },
    }
  );
};
