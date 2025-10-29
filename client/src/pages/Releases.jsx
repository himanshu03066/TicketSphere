// import React from "react";

// const Releases = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-[80vh] text-center text-gray-300 space-y-4">
//       <div className="text-4xl font-semibold flex items-center gap-2 animate-pulse">
//         🚀 Upcoming Releases Coming Soon...
//       </div>
//       <p className="text-sm text-gray-500 animate-fade-in">
//         Exciting new movies are on their way! Stay tuned 🍿
//       </p>
//     </div>
//   );
// };

// export default Releases;
import React from "react";
import { useNavigate } from "react-router-dom";

const Releases = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-black text-center text-gray-300 space-y-8">
      <div className="text-4xl font-semibold flex items-center gap-2 animate-pulse">
        🚀 Upcoming Releases Coming Soon...
      </div>

      <p className="text-lg text-gray-400">
        Exciting new movies are on their way! Stay tuned 🍿
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Releases;
