import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Routes, Route, NavLink } from "react-router-dom";
import LpLock from "../Pages/LpLock";
import MyLock from "../Pages/MyLock";
import NewLock from "../Pages/NewLock";
import NaviforLock from "./NaviforLock";

const Locker = () => {
  return (
    <>
      {/* __________Line_________________ */}
      <div className="w-[100%] mt-5 mb-16 lg:mt-6 lg:mb-20 2xl:mb-28 3xl:mb-32 text-white h-[1px] line"></div>

      <main className="text-white">
        <section className="relative">
          <div className="">
            <div>
              <h1 className="text-3xl tracking-wider text-center md:text-4xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold md:font-extrabold">
                Liquidity Locker
              </h1>
            </div>
            <div>
              <p className="text-[18px] lg:text-lg 2xl:text-lg my-2 lg:my-4 leading-[141.4%] font-normal opacity-40 text-center ">
                Lock liquidity pool tokens. Supports Ethereum (Uniswap V2),
                Polygon(Quickswap), BSC(PancakeSwap)
              </p>
            </div>

            <div className="flex mt-4 md:mt-6 gap-2 items-center justify-center ">
              <button className="px-5  ls:px-6 py-2 rounded-md border-none outline-none bg-[#D40066] text-white">
                Connect Wallet
              </button>
              <div className="flex gap-1 items-center">
                <div>
                  <p className="text-sm font-normal ">Polygon</p>
                </div>
                <div className="cursor-pointer">
                  <BiChevronDown className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="w-full text-center text-[#D40066] text-sm md:text-base my-2 transition-all duration-300">
              <NavLink
                to="/newlock"
                className={({ isActive }) => (isActive ? "block" : "hidden")}>
                Could not connect. Please check your wallet network.
              </NavLink>
            </div>
            {/*________________________________________________Lock_cards___________________________________________________________ */}
            <main className="w-full flex justify-center items-center pb-10">
              <section className="w-full md:w-[70%] lg:w-[60%] mt-8">
                <div className="w-full flex justify-around items-center">
                  <NaviforLock />
                </div>
                <div className="relative">
                  {/* __________________________________My_Lock________________________________________________________________ */}
                  <div className="w-full ">
                    <Routes>
                      <Route path="/" element={<LpLock />} />
                      <Route path="/mylock" element={<LpLock />} />
                      <Route path="/newlock" element={<NewLock />} />
                    </Routes>
                  </div>

                  {/* Circle */}
                  <div className="absolute top-[15.8rem] 2xl:top-[19rem] -left-[2rem] md:-left-[6rem] z-[-1]">
                    <img src="/Images/locker-side-cricle.png" alt="" />
                  </div>
                </div>
              </section>
            </main>
          </div>
          {/* mini elipsi */}
          <div className="absolute top-4 left-4 z-[-1]">
            <img src="/Images/liquidtiy-1.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Locker;
