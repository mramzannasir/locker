import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <nav className="md:flex items-center nav-bg pl-2  py-2  md:px-1 justify-between">
          <div className="logo flex cursor-pointer ">
            <img className="w-24 md:w-28" src="/Images/logo.png" />
          </div>
          <div
            onClick={onclick}
            className="cursor-pointer text-white md:hidden right-1 top-2 absolute text-2xl">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div
            className={
              "md:ml-5 flex text-xs  md:items-center md:justify-center "
            }>
            <ul
              className={`flex flex-col md:items-center md:flex-row md:gap-2 2xl:gap-4 absolute md:static ${
                open ? "left-0" : "left-[-980px]"
              }  glass-bgnav md:bg-inherit text-xl md:text-sm lg:text-base lg:gap-3 w-full md:w-auto h-screen md:h-auto top-0 transition-all ease-in duration-700`}>
              <li className="my-2 opacity-50 hover:opacity-100  hover-underline-animation  md:my-auto cursor-pointer  text-center md:text-left">
                <Link path="/">Home</Link>
              </li>
              <li className="my-2 opacity-50 hover:opacity-100  hover-underline-animation  md:my-auto cursor-pointer text-center md:text-left">
                <Link path="/locker">Liquidity Locker</Link>
              </li>
              <li className="my-2 opacity-50 hover:opacity-100  hover-underline-animation  md:my-auto cursor-pointer text-center md:text-left">
                <Link to="/token">Token Tower</Link>
              </li>
              <li className="my-2 opacity-50 hover:opacity-100  hover-underline-animation  md:my-auto cursor-pointer text-center md:text-left">
                Contact
              </li>
              <li>
                {/* Icon */}
                <div className="flex justify-center w-full items-center gap-4 md:gap-2 lg:gap-4 lg:ml-6 lg:mr-6">
                  <div className="cursor-pointer">
                    <img src="/Images/fb.png" alt="logo" />
                  </div>
                  <div className="cursor-pointer">
                    <img src="/Images/tiwter.png" alt="logo" />
                  </div>
                  <div className="cursor-pointer">
                    <img src="/Images/insta.png" alt="logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex w-full md:w-auto justify-center items-center my-4 px-2 md:my-0 md:px-0">
                  <button className="outline-none border-none text-lg lg:text-base font-semibold rounded-xl text-[#100C24] bg-white w-full px-2 py-[2px] lg:px-8 lg:py-2">
                    Connect Wallet
                  </button>
                </div>
              </li>
            </ul>
            <div
              onClick={onclick}
              className="cursor-pointer text-white md:hidden right-1 top-2 absolute text-2xl">
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
