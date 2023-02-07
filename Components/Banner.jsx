import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 order-last lg:h-full">
              <img
                alt="Party"
                src="Hero.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 ">
              <h2 className="text-3xl font-bold  sm:text-6xl ">
                Healthy in side<br></br>
                <span className="text-[#8382EB] ">freash</span> out side
              </h2>

              <p className="mt-4 text-gray-600 text-[16px] max-w-[420px] text-justify">
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <span className="text-sm font-medium"> Get Started </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="mt-8 ml-5 inline-flex items-center rounded border border-indigo-600 hover:bg-indigo-600 px-8 py-3 text-indigo-600 bg-transparent hover:text-white focus:outline-none focus:ring active:text-indigo-500"
              >
                <span className="text-sm font-medium">Learn More</span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <h2 className="my-6">Brands:</h2>
              <Image alt="next/brand_img"src="/brand.png" width={420} height={63} ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
