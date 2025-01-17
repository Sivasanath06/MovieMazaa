import { Routes, Route } from "react-router-dom";
import { MovieItem, MovieListScreen, Error, SearchResult } from "../pages";
import React from "react";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      
        <Routes>
          <Route path="/" element={<MovieListScreen apiPath="movie/now_playing" title="Home" />} />
          <Route path="/movie/:id" element={<MovieItem />} />
          <Route path="movies/popular" element={<MovieListScreen apiPath="movie/popular" title="Popular" />} />
            <Route path="movies/top" element={<MovieListScreen apiPath="movie/top_rated" title="Top Rated" />} />
            <Route path="movies/upcoming" element={<MovieListScreen apiPath="movie/upcoming" title="Upcoming" />} />
          <Route path="/search" element={<SearchResult apiPath="search/movie" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      
    </div>
  );
};
