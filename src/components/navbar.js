import Logo from "../assests/logo.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <nav class="bg-black border-gray-200 fixed top-0 w-full z-50">
        <div class="flex flex-wrap items-center justify-between mx-auto p-4 px-10">
          <div>
            <img src={Logo} class="h-14" alt="Theatron Club Logo" />
          </div>
          {(toggleMenu || screenWidth > 768) && (
            <div class="w-full md:block md:w-auto" id="navbar-default">
              <ul
                style={{ fontFamily: "'Jura', sans-serif" }}
                class="font-medium text-xl flex flex-col md:p-0 mt-4 text-white md:flex-row md:space-x-8 md:mt-0 md:border-0"
              >
                <li className="px-5">
                  <Link
                    to="home"
                    smooth={true}
                    spy={true}
                    class="py-2 px-3 rounded md:bg-transparent md:p-0 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#E10000] after:origin-bottom-right after:transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="px-5">
                  <Link
                    to="about"
                    smooth={true}
                    spy={true}
                    class="py-2 px-3 rounded md:bg-transparent md:p-0 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#E10000] after:origin-bottom-right after:transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="px-5">
                  <Link
                    to="team-members"
                    smooth={true}
                    spy={true}
                    class="py-2 px-3 rounded md:bg-transparent md:p-0 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#E10000] after:origin-bottom-right after:transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    aria-current="page"
                  >
                    Team Members
                  </Link>
                </li>
                <li className="px-5">
                  <Link
                    to="contact"
                    smooth={true}
                    spy={true}
                    class="py-2 px-3 rounded md:bg-transparent md:p-0 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#E10000] after:origin-bottom-right after:transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleNav}
            className="mt-2 inline-flex items-center bg-gray-100 p-2 text-lg w-8 h-8 justify-center text-black rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            {!toggleMenu && <i className="fa-solid fa-bars text-gray-800" />}
            {toggleMenu && <i className="fa-solid fa-xmark text-gray-800" />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
