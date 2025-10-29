
// import { assets } from "../assets/assets";
// import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import bg from "../assets/backgroundImage1.png"; 

// const HeroSection = () => {
//   const navigate = useNavigate();

//   return (
// <div
//   style={{
//     backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.65)), url(${bg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center top",
//     backgroundRepeat: "no-repeat",
//     filter: "brightness(1.49) contrast(0.9) saturate(1.7)",
//   }}
//   className="relative flex flex-col items-start justify-center gap-4 px-4 sm:px-6 md:px-16 lg:px-36 min-h-[100dvh] text-center sm:text-left"
// >


//       <div className="absolute inset-0 bg-black/60"></div>

//       <div className="relative z-10">
//         <img src={assets.marvelLogo} alt="Marvel Studios" className="max-h-11 lg:h-11 mt-20" />

//         <h1 className="text-5xl md:text-[70px] font-semibold leading-tight max-w-3xl">
//           Avengers <br /> Infinity War
//         </h1>

//         <div className="flex items-center gap-4 text-gray-300 mt-2">
//           <span>Action | Adventure | Sci-Fi</span>
//           <div className="flex items-center gap-1">
//             <CalendarIcon className="w-4.5 h-4.5" /> 2018
//           </div>
//           <div className="flex items-center gap-1">
//             <ClockIcon className="w-4.5 h-4.5" /> 2h 29m
//           </div>
//         </div>

//         <p className="max-w-md text-gray-300 mt-2">
//           As the Avengers and their allies continue to protect the world, a new danger
//           emerges — Thanos. Determined to collect all six Infinity Stones, he plans to
//           wipe out half of all life in the universe. The fate of Earth and existence
//           itself has never been more uncertain.
//         </p>
//  <button
//   onClick={() => navigate("/movies")}
//   className="flex items-center gap-1 px-6 py-3 text-sm bg-rose-600 hover:bg-rose-500 hover:shadow-rose-400/50 transition rounded-full font-medium cursor-pointer mt-4 text-white shadow-md"
// >
//   Explore Movies
//   <ArrowRight className="w-5 h-5" />
// </button>



//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/backgroundImage1.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.49) contrast(0.9) saturate(1.7)",
      }}
      className="relative flex flex-col items-start justify-center gap-4 px-5 sm:px-8 md:px-16 lg:px-36 min-h-[100dvh] text-center sm:text-left overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mt-20 sm:mt-0">
        <img
          src={assets.marvelLogo}
          alt="Marvel Studios"
          className="max-h-9 sm:max-h-11 lg:h-11 mb-3 mx-auto sm:mx-0"
        />

        <h1 className="text-4xl sm:text-5xl md:text-[70px] font-semibold leading-tight max-w-3xl">
          Avengers <br /> Infinity War
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 text-gray-300 mt-3">
          <span className="text-sm sm:text-base">Action | Adventure | Sci-Fi</span>
          <div className="flex items-center gap-1 text-sm sm:text-base">
            <CalendarIcon className="w-4 h-4" /> 2018
          </div>
          <div className="flex items-center gap-1 text-sm sm:text-base">
            <ClockIcon className="w-4 h-4" /> 2h 29m
          </div>
        </div>

        <p className="max-w-md text-gray-300 mt-3 text-sm sm:text-base mx-auto sm:mx-0">
          As the Avengers and their allies continue to protect the world, a new danger
          emerges — Thanos. Determined to collect all six Infinity Stones, he plans to
          wipe out half of all life in the universe. The fate of Earth and existence
          itself has never been more uncertain.
        </p>

        <button
          onClick={() => navigate("/movies")}
          className="flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base bg-rose-600 hover:bg-rose-500 hover:shadow-rose-400/50 transition-all rounded-full font-medium cursor-pointer mt-5 text-white shadow-md active:scale-95 mx-auto sm:mx-0"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
