import member1 from "../assests/teammembers/member-1.png";

const CarouselItem = ({ slides }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center p-8 border border-white rounded-3xl bg-[#4c4646]">
        <img src={member1} alt="..." />
        <div className="text-5xl font-semibold text-[#E10000] font-Jura">
          Name
        </div>
        <div className="text-2xl font-semibold font-Jura">Position</div>
      </div>
    </div>
  );
};

export default CarouselItem;
