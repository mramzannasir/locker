import React from "react";
import { Navdata } from "../assets/Data";
import { NavLink } from "react-router-dom";

const NaviforLock = () => {
  return (
    <>
      <div className="contents cursor-pointer ">
        {Navdata.map((item, index) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "card-bg cursor-pointer text-xs md:text-sm font-normal rounded-sm "
                : ""
            }>
            <div key={index} className=" ">
              <div className="">
                {" "}
                <div className="cursor-pointer text-sm md:text-base font-normal rounded-sm  px-4 py-1">
                  {item.title}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default NaviforLock;
