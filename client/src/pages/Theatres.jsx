import React from "react";
import { useNavigate } from "react-router-dom";

const Theatres = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-gray-300 space-y-8">
      <div className="text-4xl font-semibold flex items-center gap-2 animate-pulse">
        🎭 Theatres Section Coming Soon...
      </div>

      <p className="text-lg text-gray-400">
        We’re setting up theatre listings near you! Stay tuned 🎬
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Theatres;
