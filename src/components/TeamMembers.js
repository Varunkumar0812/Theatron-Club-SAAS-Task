import React from "react";
import spotlight_1 from "../assests/teampage/Spotlight-01 1.png";
import spotlight_2 from "../assests/teampage/new down spotlight 1.png";
import { Carousel } from "flowbite-react";
import CarouselItem from "./Carousel";

const TeamMembers = () => {
  return (
    <div className="bg-[#0f0f0f] pt-24 px-20" id="team-members">
      <div className="flex items-center">
        <div className="h-2 w-40 bg-[#E10000] shadow-lg"></div>
        <div
          className="font-bold text-[#6b6161] text-3xl sm:text-5xl px-5"
          style={{ fontFamily: "Jura" }}
        >
          Team Members
        </div>
        <div className="h-2 w-10 bg-[#E10000] shadow-lg"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          <img src={spotlight_1} alt="" className="w-[350px] h-[200px]" />
        </div>
        <div className="h-[600px] w-full">
          <Carousel>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </div>
        <div className="flex justify-center items-center relative right-2">
          <img src={spotlight_2} alt="" className="w-[300px] h-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
