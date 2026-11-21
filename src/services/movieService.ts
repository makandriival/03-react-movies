import axios, { type AxiosResponse } from "axios";

import type { Movie } from "../types/movie";

interface MoviesResponse {
  results: Movie[];
}

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});


export async function fetchMovies(query: string): Promise<Movie[]> {
  const response: AxiosResponse<MoviesResponse> = await api.get(
    "/search/movie",
    {
      params: { query },
    },
  );

  return response.data.results;
}
