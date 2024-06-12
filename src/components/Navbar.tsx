import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="w-full py-6 z-50 shadow-sm text-white bg-[#040404] sticky top-0">
      <Container>
        <div className="flex justify-between items-center ">
          {/* <div id="nav-logo" className="relative text-4xl">K<span className="absolute top-2 left-5 text-teal-400">S</span></div> */}
          <Link
            to={"/"}
            id="nav-logo"
            className="relative text-3xl uppercase font-heading"
          >
            Wangsheng <span className="text-red-500">Funeral</span>
          </Link>
          <ul className="flex gap-3">
            <li className="px-4 py-2 rounded-full transition-all duration-150 ease-in-out hover:text-red-500">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 rounded-full transition-all duration-150 ease-in-out hover:text-red-500">
              <a href="/#about">About</a>
            </li>
            <li className="px-4 py-2 rounded-full transition-all duration-150 ease-in-out hover:text-red-500">
              <a href="/#services">Services</a>
            </li>
            <li className="px-6 py-2 font-semibold text-white uppercase bg-red-500 rounded-full transition-all duration-150 ease-in-out hover:bg-red-600">
              <Link to="/#contact">Book Now</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
