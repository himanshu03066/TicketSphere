
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/backgroundImage1.png"; 

const HeroSection = () => {
  const navigate = useNavigate();

  return (
<div
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.65)), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    height: "100vh",
    backgroundRepeat: "no-repeat",
filter: "brightness(1.49) contrast(0.9) saturate(1.7)",
  }}
 className="flex flex-col items-start justify-center gap-4 px-6 sm:px-6 md:px-16 lg:px-36 text-center sm:text-left"
>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <img src={assets.marvelLogo} alt="Marvel Studios" className="max-h-11 lg:h-11 mt-20" />

        <h1 className="text-5xl md:text-[70px] font-semibold leading-tight max-w-3xl">
          Avengers <br /> Infinity War
        </h1>

        <div className="flex items-center gap-4 text-gray-300 mt-2">
          <span>Action | Adventure | Sci-Fi</span>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4.5 h-4.5" /> 2018
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4.5 h-4.5" /> 2h 29m
          </div>
        </div>

        <p className="max-w-md text-gray-300 mt-2">
          As the Avengers and their allies continue to protect the world, a new danger
          emerges — Thanos. Determined to collect all six Infinity Stones, he plans to
          wipe out half of all life in the universe. The fate of Earth and existence
          itself has never been more uncertain.
        </p>
    < button
  onClick={() => navigate("/movies")}
  className="flex items-center gap-1 px-6 py-3 text-sm bg-rose-600 hover:bg-rose-500 transition rounded-full font-medium cursor-pointer mt-4 text-white shadow-md shadow-rose-400/30">
  Explore Movies
  <ArrowRight className="w-5 h-5" />
     </button>


      </div>
    </div>
  );
};

export default HeroSection;
