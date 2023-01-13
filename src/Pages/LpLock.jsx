import React, { useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const LpLock = () => {
  const [val, setVal] = useState("25");

  const handleZero = () => {
    if (val == 0) {
      setVal("0");
    }
    if (val == 25) {
      setVal("0");
    }
    if (val == 50) {
      setVal("0");
    }
    if (val == 75) {
      setVal("0");
    }
    if (val == 100) {
      setVal("0");
    }
  };
  const handle25 = () => {
    if (val == 0) {
      setVal("25");
    }

    if (val == 50) {
      setVal("25");
    }
    if (val == 75) {
      setVal("25");
    }
    if (val == 100) {
      setVal("25");
    }
  };
  const handle50 = () => {
    if (val == 0) {
      setVal("50");
    }
    if (val == 25) {
      setVal("50");
    }
    if (val == 75) {
      setVal("50");
    }
    if (val == 100) {
      setVal("50");
    }
  };
  const handle75 = () => {
    if (val == 0) {
      setVal("75");
    }
    if (val == 25) {
      setVal("75");
    }
    if (val == 50) {
      setVal("75");
    }
    if (val == 100) {
      setVal("75");
    }
  };
  const handle100 = () => {
    if (val == 0) {
      setVal("100");
    }
    if (val == 25) {
      setVal("100");
    }
    if (val == 50) {
      setVal("100");
    }
    if (val == 75) {
      setVal("100");
    }
  };
  const [duration, setduration] = useState("40");
  const month3 = () => {
    if (duration == 0) {
      setduration("8");
    }
    if (duration == 40) {
      setduration("0");
    }
    if (duration == 70) {
      setduration("0");
    }
    if (duration == 100) {
      setduration("0");
    }
  };
  const month6 = () => {
    if (duration == 0) {
      setduration("40");
    }
    if (duration == 8) {
      setduration("40");
    }
    if (duration == 70) {
      setduration("40");
    }
    if (duration == 100) {
      setduration("40");
    }
  };
  const year1 = () => {
    if (duration == 0) {
      setduration("70");
    }
    if (duration == 8) {
      setduration("70");
    }
    if (duration == 40) {
      setduration("70");
    }
    if (duration == 100) {
      setduration("70");
    }
  };
  const year5 = () => {
    if (duration == 0) {
      setduration("100");
    }
    if (duration == 8) {
      setduration("100");
    }
    if (duration == 40) {
      setduration("75");
    }
    if (duration == 70) {
      setduration("100");
    }
  };
  let width = "100%";
  return (
    <>
      <div className=" rounded-lg mt-4 card-bg w-full h-full p-2 md:p-4  lg:p-5 2xl:p-7 4xl:p-8">
        <div>
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold md:font-bold">
            LP Pair Address
          </h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="text-sm md:text-base tracking-wide 4xl:text-lg mt-4 font-normal opacity-20">
              93hd9wdh9dnasodnwiaohd39h3ehwhd90wqh <br /> dsauhdu9s
            </p>
          </div>
          <div>
            <p className="text-xs font-normal opacity-20">--/--</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white opacity-20 rounded-full mt-6 md:mt-8 lg:mt-8 2xl:mt-8 4xl:mt-8"></div>
        <div className="mt-4">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold md:font-bold">
            LP Pair Amount
          </h1>
        </div>
        <div className="flex justify-between w-full items-center">
          <div>
            <p className="text-sm md:text-base tracking-wide 4xl:text-lg mt-4 font-normal opacity-20">
              0
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base tracking-wide 4xl:text-lg mt-4 font-normal opacity-20">
              Balance 0
            </p>
          </div>
        </div>
        {/* ________________________________________Line______________________________________________________ */}
        <div className="w-full flex flex-row justify-between  mt-2">
          <div className="w-[80%] md:w-[90%] ">
            <div className="line py-4 px-2 rounded-[6px]">
              {" "}
              <ProgressBar
                height={4}
                percent={val}
                filledBackground="white"
                width={width}></ProgressBar>
            </div>
          </div>
          <div className="w-[17%] md:w-[8%] line rounded-[4px] flex justify-center items-center ">
            <p className="opacity-30 text-base md:text-lg">{val}%</p>
          </div>
        </div>
        <div className="w-[90%] mt-2">
          <div className="flex justify-between  items-center px-2">
            <button
              onClick={handleZero}
              className="outline-none opacity-20 text-sm focus:bg-slate-500 rounded-md px-2 py-1   duration-300">
              0%
            </button>
            <button
              onClick={handle25}
              className=" outline-none  opacity-20 text-sm focus:bg-slate-500  rounded-md px-2 py-1  duration-300">
              25%
            </button>
            <button
              onClick={handle50}
              className="outline-none  opacity-20 text-sm focus:bg-slate-500  rounded-md px-2 py-1 duration-300">
              50%
            </button>
            <button
              onClick={handle75}
              className="outline-none  opacity-20 text-sm focus:bg-slate-500   rounded-md px-2 py-1 duration-300">
              75%
            </button>
            <button
              onClick={handle100}
              className="outline-none opacity-20  text-sm focus:bg-slate-500  rounded-md px-2 py-1 duration-300">
              100%
            </button>
          </div>
        </div>
      </div>

      <div className=" rounded-lg mt-4 card-bg w-full h-full p-2 md:p-4  lg:p-5 2xl:p-7 4xl:p-8">
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold md:font-bold">
            Lock Period
          </h1>
        </div>
        <div className="w-full flex justify-between items-center mt-4">
          <div>
            <p className="text-sm md:text-base tracking-wide 4xl:text-lg mt-4 font-normal opacity-20">
              2023-01-07 21:53
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base tracking-wide 4xl:text-lg mt-4 font-normal opacity-20">
              Will lock for a day
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row  justify-between mt-2">
          <div className="w-[80%] md:w-[90%] ">
            <div className="line py-4 px-2 rounded-[6px]">
              {" "}
              <ProgressBar
                height={4}
                percent={duration}
                filledBackground="white"
                width={width}></ProgressBar>
            </div>
          </div>
          <div className="w-[17%] md:w-[8%] line rounded-[4px] flex justify-center items-center ">
            <p className="opacity-30 text-base md:text-lg">0%</p>
          </div>
        </div>
        <div className="flex justify-between w-[90%] items-center px-2 mt-2">
          <button
            onClick={month3}
            className="outline-none opacity-20 text-sm focus:bg-slate-500 rounded-md px-2 py-1   duration-300">
            3 Months
          </button>
          <button
            onClick={month6}
            className=" outline-none  opacity-20 text-sm focus:bg-slate-500  rounded-md px-2 py-1  duration-300">
            6Months
          </button>
          <button
            onClick={year1}
            className="outline-none  opacity-20 text-sm focus:bg-slate-500  rounded-md px-2 py-1 duration-300">
            1 year
          </button>
          <button
            onClick={year5}
            className="outline-none  opacity-20 text-sm focus:bg-slate-500   rounded-md px-2 py-1 duration-300">
            5 Year
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center gap-1 ls:gap-2 md:gap-4 w-full justify-center md:justify-start">
          <button className="px-5 ls:px-6 py-2 rounded-md  border-[1px] border-[#d40066] outline-none bg-[#D40066] text-white 4xl:px-6 4xl:py-[9px]">
            Get Started
          </button>
          <button className="px-5 ls:px-6 py-2 rounded-md  border-[1px] border-white outline-none  text-white  4xl:px-6 4xl:py-[9px]">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default LpLock;
