import React, { useRef } from "react";
import { data } from "../../data/data";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Work = () => {
  const project = data;
  const slideRef = useRef(null);

  const scrollLeft = () => {
    slideRef.current?.scrollBy({
      left: -slideRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    slideRef.current?.scrollBy({
      left: slideRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div
        name="work"
        className="w-full md:h-screen text-gray-300 bg-[#0a192f] "
      >
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-5">
          <div className="pb-2 text-center md:text-start">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
            <p className="py-6">Check out some of my recent work</p>
          </div>
          <div className="flex">
            <button
              className=" top-1/2 transform  left-5 flex items-center hover:bg-black justify-center w-10 h-10   bg-opacity-50 hover:bg-opacity-75 text-white z-10"
              onClick={scrollLeft}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className=" top-1/2 transform  right-5 flex items-center hover:bg-black justify-center w-10 h-10   bg-opacity-50 hover:bg-opacity-75 text-white z-10"
              onClick={scrollRight}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* container for projects */}
          <div
            ref={slideRef}
            className="flex  justify-between overflow-x-scroll scrollbar-hide gap-5"
          >
            {/* Gird Item */}
            {project.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
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
    </div>
  );
};

export default Work;
