import Container from "../components/Container";
import huTaoHat from "/huTaoHat.png";

export const Hero = () => {
  return (
    <div className="w-full bg-[#040404] text-white min-h-[800px]">
      <Container>
        <div className="py-16 block justify-between md:grid grid-cols-12 bg-gradient-to-b from-transparent to-[#00000050]">
          <div className="flex flex-col col-start-2 col-end-6 gap-6 pt-12 sm:col-start-1 md:ps-16">
            <h1 className="text-6xl md:text-7xl font-heading">
              FUNERAL SERVICES FOR{" "}
              <span className="text-red-500">
                <span className="relative">CHEAP </span>
              </span>
            </h1>
            <p className="text-[#FFFFFFCC] max-w-sm leading-relaxed">
              Aiya~! Enjoy your post-mortem benefits from Wangsheng Funeral
              Parlor by signing up to our <br />
              <span className="italic text-red-500">
                <a href="#">special lethal offers!</a>
              </span>
            </p>
            <div className="relative mt-8">
              <button className="relative px-16 py-4 w-full font-semibold text-white bg-red-500 rounded-full transition-all duration-300 ease-in-out md:w-auto hover:bg-red-600 group">
                <p>BOOK NOW</p>
                <img
                  src={huTaoHat}
                  alt="huTaoHat"
                  className="rotate-0 absolute h-20 top-[-2.25rem] left-[-2.5rem] transform translate-y-0 translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-2.5rem] group-hover:translate-x-[-2.5rem] group-hover:rotate-[-30deg]"
                />
              </button>
            </div>
          </div>
          <div className="relative col-span-6 col-end-12 justify-center items-center md:p-10 min-h-[500px] md:mt-12 bg-blues-300">
            <img
              src="https://i0.wp.com/traveler.gg/wp-content/uploads/Hutao-Banner1.png?resize=2048%2C1750&ssl=1"
              className="absolute rounded-[48px] top-20 md:top-0 "
              alt=""
            />

            {/* <div className="absolute py-6 px-12 right-0 bottom-[-5rem] rounded-lg bg-orange-600 text-white shadow-lg">
                <h1 className='font-semibold text-'>Syke</h1>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};
