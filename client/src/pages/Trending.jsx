import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";
import { useAppContext } from "../context/AppContext";

const Trending = () => {
  const { axios } = useAppContext();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { data } = await axios.get("/api/show/trending");
        console.log("TRENDING API RESPONSE:", data);

        if (data.success) {
          setMovies(data.movies || []);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Loading trending movies...</p>
      </div>
    );
  }

  return movies.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">

      <BlurCircle top="150px" left="0" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">
        Trending Movies
      </h1>

      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            trending={true}
          />
        ))}
      </div>

    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">
        No trending movies
      </h1>
    </div>
  );
};

export default Trending;