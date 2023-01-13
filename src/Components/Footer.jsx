import React from "react";

const Footer = () => {
  return (
    <div>
      <main>
        <section className="card-bg   relative w-full  pt-8 md:pt-12 lg:pt-20 xl:pt-32 2xl:pt-40  rounded-lg text-white mt-[1rem] md:mt-6 xl:mt-[3rem] 2xl:mt-[4rem] 4xl:mt-[6rem]">
          <div className="container mx-auto">
            <div className="flex justify-center flex-col items-center">
              <div>
                <img src="/Images/logo.png" alt="" />
              </div>
              <div className="flex w-full justify-center items-center gap-2 mt-2">
                <div className="cursor-pointer">
                  <img
                    src="/Images/Ftwitter.png"
                    alt=""
                    className="w-8 active:scale-125 duration-300"
                  />
                </div>
                <div className="cursor-pointer">
                  <img
                    src="/Images/Fdiscord.png"
                    alt=""
                    className="w-8 active:scale-125 duration-300"
                  />
                </div>
                <div className="cursor-pointer">
                  <img
                    src="/Images/Ftelegram.png"
                    alt=""
                    className="w-8 active:scale-125 duration-300"
                  />
                </div>
              </div>
            </div>
            {/* Line */}
            <div className="w-[100%] my-5  text-white h-[1px] line"></div>
            {/* Line */}
            <div className="flex justify-between flex-col md:flex-row items-center px-1 md:px-4 xl:px-8 2xl:px-11 3xl:px-14 4xl:px-20">
              <div>
                <p className="text-sm md:text-base font-normal opacity-60">
                  © Copyright Unilocker. All Rights Reserved
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base font-normal opacity-60">
                  Terms and Conditions
                </p>
              </div>
            </div>

            {/* Cricle */}
            <div className="absolute -top-[2rem] md:mt-[-2rem]">
              <img
                src="Images/Footer-cricle.png"
                className="w-20 md:w-auto"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Footer;
