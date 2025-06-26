"use client";

import { useState, useEffect } from 'react';
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import Loading from "@/components/Loading";

const MoviesGrid = ({ search }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day`,
          {
            params: {
              api_key: '8d155a452063365b70d7e38e2609b662'
            }
          }
        );
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log('MI ERROR FUE', error);
        setError(true);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-4">
      {loading && <Loading />}
      {error && <p>Hubo un error</p>}
      {!loading && !error && (
        <div className="flex overflow-x-auto space-x-4 py-4 px-2">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-40 sm:w-48 md:w-52 lg:w-60">
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <p className="text-white">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesGrid;

