import React, { useRef } from "react";
import { data } from "../../data/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Work = () => {
  const project = data;
  const slideRef = useRef(null);

  const scrollLeft = () => {
    slideRef.current?.scrollBy({
      left: -slideRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    slideRef.current?.scrollBy({
      left: slideRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="w-full bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </h2>
          <p className="py-4">Check out some of my recent work</p>
        </div>
        
        <div className="flex justify-between mb-4">
          <button
            className="flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
            onClick={scrollLeft}
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
            onClick={scrollRight}
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Projects container */}
        <div
          ref={slideRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {project.map((item, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[280px] h-[200px] md:w-[350px] md:h-[250px] shadow-lg shadow-[#040c16] group rounded-md overflow-hidden relative"
              style={{ 
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Hover effect for images */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(112,157,255,0.8)] to-[hsla(242,74%,61%,0.8)] opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                <span className="text-xl md:text-2xl font-bold text-white tracking-wider mb-4">
                  {item.name}
                </span>
                <div className="flex space-x-2">
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm md:text-base hover:bg-gray-200 transition-colors">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm md:text-base hover:bg-gray-200 transition-colors">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;