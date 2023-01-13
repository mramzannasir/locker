import React from "react";

const Hero = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center w-full text-white mt-9 lg:-mt-[2rem] 2xl:-mt-1 4xl:mt-[1rem]">
        <section className="flex  flex-col lg:w-[50%]">
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold md:font-black text-center md:text-left">
              Smart <span className="fancy-text">Liquidity</span> Locker and
              Token Vesting for Ethereum, Polygon and BSC
            </h1>
          </div>
          <div>
            <p className=" text-[18px] lg:text-lg 2xl:text-lg my-2 lg:my-4 leading-[141.4%] font-normal opacity-40 text-center md:text-left">
              Welcome to our NFT marketplace! Here you can discover, collect,{" "}
              <br />
              and trade unique digital assets.
            </p>
          </div>
          <div className="flex items-center gap-1 ls:gap-2 md:gap-4 w-full justify-center md:justify-start">
            <button className="px-5 ls:px-6 py-2 rounded-md  border-[1px] border-[#d40066] outline-none bg-[#D40066] text-white 4xl:px-6 4xl:py-[9px]">
              Get Started
            </button>
            <button className="px-5 ls:px-6 py-2 rounded-md  border-[1px] border-white outline-none  text-white 4xl:px-6 4xl:py-[9px]">
              Connect Wallet
            </button>
          </div>
        </section>
        <section className=" lg:w-[50%]  baner pr-6 md:pr-0">
          <img src="/Images/b1.png" alt="" />
        </section>
      </main>
    </>
  );
};

export default Hero;
