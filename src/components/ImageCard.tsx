interface ImageCardProps {
  img: string;
  name: string;
  description: string;
}

const ImageCard = ({ service }: { service: ImageCardProps }) => {
  return (
    <div className="pb-8">
      <div className="relative w-full h-64 bg-red-50 lg:h-48">
        <img
          src={service.img}
          alt=""
          className="object-cover absolute w-full h-full"
        />
      </div>
      <p className="mt-2 text-xl font-semibold text-yellow-200">
        {service.name}
      </p>
      <p className="mt-3 mr-3 text-sm text-white/70">{service.description}</p>
    </div>
  );
};

export default ImageCard;
