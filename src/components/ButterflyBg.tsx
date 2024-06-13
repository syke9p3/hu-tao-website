import b from "/b.png";

const ButterflyBg = () => {
  return (
    <>
      <div className="butterfly-group absolute pointer-events-none top-10 left-[-60px] translate">
        <img
          src={b}
          className="transform rotate-[-30deg] scale-[0.75] left-[10px]"
        />
        <img
          src={b}
          className="absolute left-[-4rem] top-[-2.5rem] rotate-[1deg] scale-50"
        />
        <img
          src={b}
          className="absolute transform rotate-[30deg] scale-[1] left-[-7rem] top-[-6rem]"
        />
        <img
          src={b}
          className="absolute left-[-10px] bottom-[-4.5rem] rotate-[32deg] scale-[0.25]"
        />
        <img src={b} className="absolute left-16 bottom-[-6rem] scale-[0.25]" />
        <img
          src={b}
          className="absolute left-[-10px] bottom-[-7.5rem] rotate-[-8deg] scale-50"
        />
        <img
          src={b}
          className="absolute left-[3.25rem] bottom-[-9rem] rotate-[-17deg] scale-50"
        />
        <img
          src={b}
          className="absolute left-[-2rem] bottom-[-10rem] scale-[0.25]"
        />
        <img
          src={b}
          className="absolute left-[2rem] bottom-[-11rem] scale-[0.25] rotate-[24deg]"
        />
        <img
          src={b}
          className="absolute left-[1rem] bottom-[-14rem] rotate-[22deg] scale-50"
        />
        <img
          src={b}
          className="absolute left-[5rem] bottom-[-17rem] rotate-[-35deg] scale-50 opacity-40"
        />
        <img
          src={b}
          className="absolute left-[11rem] bottom-[-18rem] rotate-[32deg] scale-50 opacity-30"
        />
        <img
          src={b}
          className="absolute left-[14rem] bottom-[-20rem] rotate-[30deg] scale-[0.25]  opacity-20"
        />
        <img
          src={b}
          className="absolute left-[8rem] bottom-[-20rem] rotate-[-20deg] scale-[0.25]  opacity-10"
        />
      </div>
      <div className="butterfly-group absolute pointer-events-none bottom-[2rem] right-[-10rem] translate transform rotate-[-20deg] -scale-x-100 -scale-y-100">
        <img src={b} alt="" className="transform rotate-[30deg] scale-[1.25]" />
        <img src={b} className="absolute left-16 bottom-[-6rem] scale-[0.25]" />
        <img
          src={b}
          className="absolute left-[-10px] bottom-[-7.5rem] rotate-[-8deg] scale-50"
        />
        <img
          src={b}
          className="absolute left-[3.25rem] bottom-[-9rem] rotate-[-17deg] scale-50"
        />
        <img
          src={b}
          className="absolute left-[-2rem] bottom-[-10rem] scale-[0.25]"
        />
        <img
          src={b}
          className="absolute left-[2rem] bottom-[-11rem] scale-[0.25] rotate-[24deg]"
        />
        <img
          src={b}
          className="absolute left-[1rem] bottom-[-14rem] rotate-[22deg] scale-50"
        />
        <img
          src={b}
          className="absolute left-[5rem] bottom-[-17rem] rotate-[-35deg] scale-50 opacity-40"
        />
        <img
          src={b}
          className="absolute left-[11rem] bottom-[-18rem] rotate-[32deg] scale-50 opacity-30"
        />
        <img
          src={b}
          className="absolute left-[14rem] bottom-[-20rem] rotate-[30deg] scale-[0.25]  opacity-20"
        />
        <img
          src={b}
          className="absolute left-[8rem] bottom-[-20rem] rotate-[-20deg] scale-[0.25]  opacity-10"
        />
      </div>
    </>
  );
};

export default ButterflyBg;
