
import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [fade, setFade] = useState(false);

  const handleClick = (trailer) => {
    if (trailer.videoUrl === currentTrailer.videoUrl) return;
    setFade(true);
    setTimeout(() => {
      setCurrentTrailer(trailer);
      setFade(false);
    }, 400);
  };

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-44 py-16 sm:py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto text-center sm:text-left">
        Trailers
      </p>

      <div className="relative mt-6 flex justify-center">
        <BlurCircle top="-100px" right="-100px" />

        <div
          className={`w-full max-w-[960px] aspect-video rounded-xl overflow-hidden transition-opacity duration-300 ${
            fade ? "opacity-50" : "opacity-100"
          }`}
        >
          <ReactPlayer
            url={currentTrailer.videoUrl}  controls={false} width="100%" height="100%"/>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative cursor-pointer transition duration-300 hover:-translate-y-1"
            onClick={() => handleClick(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />

            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
