import Container from "./Container";
import chibi from "/chibiFooter.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-[#040404] text-white mt-8">
      <Container>
        <div className="container px-0 py-12 mx-auto md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="flex gap-3 items-end">
                <img src={chibi} alt="" className="w-24" />
                <h1 className="max-w-lg text-3xl text-gray-800 font-heading xl:text-4xl dark:text-white">
                  SEE YOU ON THE OTHER SIDE{" "}
                  <span className="font-primary"> ~</span>{" "}
                </h1>
              </div>
              {/* 
                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input id="email" type="text" className="xl:w-[18rem] px-4 py-2 bg-gray-700 rounded-full  text-gray-100 border-red-600 focus:border-red-300 dark:focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-500" placeholder="Email Address" />

                                <button className="w-full px-6 py-2.5 text-sm font-medium  text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-red-500 rounded-full hover:bg-red-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Subscribe
                                </button>
                            </div> */}
            </div>

            <div>
              <p className="text-2xl text-gray-800 font-heading dark:text-white">
                QUICK LINKS
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  Who Are We
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  What We Do
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  Reserve Your Parting
                </a>
              </div>
            </div>

            <div>
              <p className="text-2xl text-gray-800 font-heading dark:text-white">
                SERVICES
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  Funeral Rites
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  Sprit Soother
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  Blazing Cremation
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-600"
                >
                  Free Coupons
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <a
              href="#"
              id="nav-logo"
              className="relative text-3xl font-heading"
            >
              WANGSHENG <span className="text-red-500">FUNERAL</span>
            </a>

            <div className="text-right">
              <p className="text-[#FFFFFF77] text-sm">
                © Wangsheng Funeral Parlor - All rights preserved!{" "}
              </p>
              <p className="text-[#FFFFFF77] text-sm font-bold">
                Website made by syke9p3
              </p>
            </div>
          </div>
        </div>
      </Container>
      <img src="" alt="" />
    </footer>
  );
};

export default Footer;
