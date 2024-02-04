import Curtain from "../assests/curtain.png";
import LogoShadow from "../assests/logo-with-shadow.png";

function HomePage() {
  return (
    <div id="home">
      <div
        style={{ backgroundImage: `url(${Curtain})` }}
        className="w-full sm:h-[1000px] md:h-[1340px] pt-64 flex justify-center bg-center text-center"
      >
        <div className="flex flex-col items-center text-gray-200">
          <div
            className="text-5xl lg:text-8xl font-bold shadow-inner-lg"
            style={{ fontFamily: "Playfair Display SC" }}
          >
            THEATRON
          </div>
          <div
            className="text-3xl lg:text-5xl mt-8"
            style={{ fontFamily: "Jura" }}
          >
            The Official Theatre Club of CEG
          </div>
          <img
            src={LogoShadow}
            alt="Theatron Logo"
            className="hover:scale-110 transition duration-100 ease-in-out"
          ></img>
        </div>
      </div>
      <div className="h-10 bg-black"></div>
    </div>
  );
}

export default HomePage;
