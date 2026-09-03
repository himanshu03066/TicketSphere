
// import { useNavigate } from "react-router-dom";

// const Releases = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-gray-300 space-y-8">
//       <div className="text-4xl font-semibold flex items-center gap-2 animate-pulse">
//         🚀 Upcoming Releases Coming Soon...
//       </div>

//       <p className="text-lg text-gray-400">
//         Exciting new movies are on their way! Stay tuned 🍿
//       </p>

//       <button
//         onClick={() => navigate("/")}
//         className="px-6 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
//       >
//         ⬅ Back to Home
//       </button>
//     </div>
//   );
// };

// export default Releases;

import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";
import { useAppContext } from "../context/AppContext";

const Releases = () => {
  const { axios } = useAppContext();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const { data } = await axios.get("/api/show/upcoming");
          console.log("UPCOMING API RESPONSE:", data);

      if (data.success) {
  setMovies(data.movies || []);
}
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUpcomingMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Loading releases...</p>
      </div>
    );
  }

  return movies.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      
      <BlurCircle top="150px" left="0" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">
        Upcoming Releases
      </h1>

      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            upcoming={true}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">
        No upcoming releases
      </h1>
    </div>
  );
};

export default Releases;