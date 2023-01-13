import React from "react";

const Contact = () => {
  return (
    <>
      <main className="relative text-white mt-[8rem] md:mt-[14rem] lg:mt-[10rem] 4xl:mt-[14rem] pb-[10rem]">
        <section>
          <div className="w-full">
            <h1 className="text-3xl tracking-wider text-center md:text-4xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold md:font-extrabold md:text-left">
              Contact us
            </h1>
            <p className="text-[18px] lg:text-lg 2xl:text-lg my-2 lg:my-2 leading-[141.4%] font-normal opacity-40 text-center md:text-left">
              Please send us your queries and requests through the form below:
            </p>
          </div>
        </section>
        {/* Form Sections */}
        <section className="flex flex-col items-center md:flex-row gap-4 w-full md:gap-8 mt-5">
          {/* Card */}
          <div className="w-full md:w-[46%] px-2 2xl:p-6 4xl:p-8 card-bg py-4 md:py-4 flex justify-center items-center rounded-2xl">
            {/* Form */}
            <div className="flex flex-col w-full">
              <div className="flex w-full flex-col md:flex-row md:gap-3 lg:mb-3 2xl:mb-5">
                <div className="w-full mb-4 lg:mb-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-inherit border-none outline-none focus:border-none"
                  />
                  <div className="w-full h-[1px] bg-white bg-opacity-30 rounded-full"></div>
                </div>
                <div className="w-full mb-4 lg:mb-0">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full bg-inherit border-none outline-none focus:border-none"
                  />
                  <div className="w-full h-[1px] bg-white bg-opacity-30 rounded-full"></div>
                </div>
              </div>
              <div className="w-full mb-4 lg:mb-3  2xl:mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-inherit border-none outline-none focus:border-none"
                />
                <div className="w-full h-[1px] bg-white bg-opacity-30 rounded-full"></div>
              </div>
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full bg-inherit border-none outline-none focus:border-none"
                />
                <div className="w-full h-[1px] bg-white bg-opacity-30 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:justify-start w-full  md:hidden">
            <button className="px-8 py-2 rounded-md border-none outline-none bg-[#D40066] text-white">
              Send Message
            </button>
          </div>
          {/* Card end_________________________________________________ */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <div>
                <img src="/Images/envo.png" alt="" srcset="" />
              </div>
              <div>
                <p className="text-[18px] lg:text-lg 2xl:text-lg leading-[141.4%] font-normal opacity-70 text-center md:text-left">
                  Support@Unilocker@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div>
                <img src="/Images/caller.png" alt="" srcset="" />
              </div>
              <div>
                <p className="text-[18px] lg:text-lg 2xl:text-lg  leading-[141.4%] font-normal opacity-70 text-center md:text-left">
                  +39434322324356
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div>
                <img src="/Images/location.png" alt="" srcset="" />
              </div>
              <div>
                <p className="text-[18px] lg:text-lg 2xl:text-lg  leading-[141.4%] font-normal opacity-70 text-center md:text-left">
                  United Kingdom, London
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center md:justify-start w-full mt-6 hidden md:block">
          <button className="px-8 py-2 rounded-md border-none outline-none bg-[#D40066] text-white">
            Send Message
          </button>
        </div>
        <div className="absolute z-[-1] right-[1rem] md:right-[4rem] -top-[5rem]  md:top-[-10rem] lg:top-[-6rem] 4xl:top-[-6rem]">
          <img src="/Images/contact-us-1.png" alt="" />
        </div>
        <div className="absolute z-[-1] right-[.5rem] md:right-[2rem] top-[1rem]">
          <img src="/Images/contact-us-2.png" alt="image is not loaded" />
        </div>
      </main>
    </>
  );
};
export default Contact;
