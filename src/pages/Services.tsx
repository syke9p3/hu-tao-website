import Container from "../components/Container";
import ImageCard from "../components/ImageCard";

export const Services = () => {
  const services = [
    {
      img: "/zhongli-shrine.jpg",
      name: "Funeral Rites",
      description:
        "Feel the command of the omnipresent power of earth with Mr. Zhongli's prescence. Die like an adepti. Order guide you",
    },
    {
      img: "/hu-idle.jpg",
      name: "Spirit Soother",
      description:
        "Talk to your spirited loved ones through Director Hu Tao. Let her be your guide to the afterlife",
    },
    {
      img: "/hu-fire.webp",
      name: "Blazing Cremation",
      description:
        "Experience a blazingly hot cremation ceremony personally administered by the Director herself",
    },
    {
      img: "/hu-coupon.webp",
      name: "Free Coupons",
      description: "Buy one coffin get one free, anniversary deal!",
    },
  ];

  return (
    <div
      id="services"
      className="w-full bg-[#040404] text-white min-h-[900px] mb-12"
    >
      <Container>
        <div className="py-12 block justify-between lg:grid grid-cols-12 bg-gradient-to-b from-transparent to-[#00000050]">
          <div className="flex flex-col col-start-1 col-end-6 gap-6 pt-12 md:ps-16">
            <h1 className="text-6xl uppercase md:text-7xl font-heading">
              Services
            </h1>
            <p className="max-w-sm leading-relaxed text-white/80">
              Wangsheng Funeral Parlor isn't your regular <i>rest in peace</i>{" "}
              establishment. We bring you experiences that are worthy{" "}
              <i>to die for!</i>
            </p>
          </div>
          <div className="grid col-span-6 col-end-12 gap-4 justify-center items-center p-10 mt-4 break-inside-avoid lg:mt-0 md:grid-cols-2 bg-blues-300">
            {services.map((service, i) => (
              <ImageCard key={i} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
