import ImageCard from "./ImageCard";

type Service = {
  name: string;
  img: string;
  description: string;
};

type SliderProps = {
  services: Service[];
};

const Slider = ({ services }: SliderProps) => {
  return (
    <div className="container  ml-8 flex space-x-8 mt-4 break-inside-avoid lg:mt-0 bg-blues-300 ">
      {services.map((service, i) => (
        <ImageCard key={i} service={service} />
      ))}
    </div>
  );
};

export default Slider;
