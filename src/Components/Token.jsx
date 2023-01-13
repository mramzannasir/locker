import React from "react";

const Token = () => {
  return (
    <>
      <main className="text-white mt-[5rem] md:mt-[12rem] 4xl:mt-[20rem] 2xl:text:mt-18">
        <section className="flex md:gap-8 2xl:gap-20 w-[100%] flex-col md:flex-row  items-center">
          <div className="">
            <img src="/Images/token-img.png" alt="" />
          </div>
          <div className="">
            <div>
              <h1 className="text-3xl md:text-left tracking-wider text-center md:text-4xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold md:font-extrabold">
                Token Vesting
              </h1>
            </div>
            <div>
              <p className="text-[18px] lg:text-lg 2xl:text-lg my-2 lg:my-4 leading-[141.4%] font-normal opacity-40 text-center md:text-left">
                Most advanced token locker - Lock all types of tokens including{" "}
                rebase/ reward tokens | Manage vesting schedule | Retain <br />{" "}
                your rewards!
              </p>
            </div>
            <div className="flex justify-center items-center md:justify-start w-full">
              <button className="px-8 py-2 rounded-md border-none outline-none bg-[#D40066] text-white">
                Launch Vesting App
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Token;
