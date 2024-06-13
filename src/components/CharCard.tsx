import React from "react";
import huTaoConst from "/huTaoConst.webp";
import zhongliConst from "/zhongli-constellation.jpg";
import { twMerge } from "tailwind-merge";

interface CharCardProps {
  name: string;
  className: string;
  role: string;
  img: string;
  children: React.ReactNode;
}

const CharCard = ({ name, children, className, role, img }: CharCardProps) => {
  let constellation;

  if (name === "HU TAO") {
    constellation = (
      <img
        src={huTaoConst}
        alt=""
        className="object-cover absolute top-0 opacity-20 mix-blend-screen pointer-events-none"
      />
    );
  } else if (name === "ZHONGLI") {
    constellation = (
      <img
        src={zhongliConst}
        alt=""
        className="pointer-events-none absolute w-96 object-cover mix-blend-screen opacity-20 saturate-0 contrast-200 blur-[2px] top-0"
      />
    );
  }

  return (
    <div
      className={twMerge(
        `flex flex-col justify-center items-center mb-36`,
        className,
      )}
    >
      <div className="flex relative justify-center p-16 mb-6">
        {constellation}
        <img
          src={img}
          alt=""
          className="object-cover z-0 w-36 h-36 rounded-full border-2 border-red-800"
        />
      </div>
      <h2 className="text-4xl font-semibold text-amber-400 font-heading">
        {name}
      </h2>
      <h3 className="text-xl">{role}</h3>
      <p className="text-[#FFFFFFAA] mt-6 text-center">{children}</p>
    </div>
  );
};

export default CharCard;
