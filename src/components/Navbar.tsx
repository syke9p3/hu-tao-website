import Container from "./Container";
import { useState } from "react";


const links = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Services",
    link: "/#services",
  },
]

const Navbar = () => {

  const [isOpened, setIsOpened] = useState(false)

  return (
    <nav className="w-full py-6 z-50 shadow-sm text-white bg-[#040404] sticky top-0">
      <Container>
        <div className="flex justify-between items-center ">
          {/* <div id="nav-logo" className="relative text-4xl">K<span className="absolute top-2 left-5 text-teal-400">S</span></div> */}
          <a
            href={"/#"}
            id="nav-logo"
            className="relative text-3xl uppercase font-heading"
          >
            Wangsheng <span className="text-red-500">Funeral</span>
          </a>

          <div className="md:hidden">
            <button className="flex items-center px-3 py-2  scale-[150%]"
              onClick={() => setIsOpened(!isOpened)}
            >
              <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path fill="#fff" d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z" />
              </svg>
            </button>
          </div>

          <ul className="gap-3 hidden md:flex">
            {
              links.map((link, index) => (
                <li key={index} className="px-4 py-2 rounded-full transition-all duration-150 ease-in-out hover:text-red-500">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))
            }
            <li className="px-6 py-2 font-semibold text-white uppercase bg-red-500 rounded-full transition-all duration-150 ease-in-out hover:bg-red-600">
              <a href="/#contacts">Book Now</a>
            </li>
          </ul>

          <ul className={`md:hidden absolute top-20 z-[100] flex flex-col gap-3 bg-[#040404] p-4 transition-all duration-300 ease-in-out ${isOpened ? 'right-0' : '-right-[20rem]'}`}>
            {
              links.map((link, index) => (
                <a href={link.link} key={index} className="text-right px-4 py-2 rounded-full transition-all duration-150 ease-in-out hover:text-red-500">
                  {link.name}
                </a>
              ))
            }
            <a href="/#contacts" className="px-6 py-2 font-semibold text-white uppercase bg-red-500 rounded-full transition-all duration-150 ease-in-out hover:bg-red-600">
              Book Now
            </a>
          </ul>


        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
