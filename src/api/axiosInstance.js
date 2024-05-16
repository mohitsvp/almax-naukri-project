import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://jobs-api14.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "jobs-api14.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});
