import Image from "next/image";
import React from "react";

export default function Workout() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center ">
        

          <div className=" lg:order-last ">
            <h2 className="text-3xl sm:text-5xl ">
            Best full body
            </h2>
            <h2 className=" mt-2 text-3xl sm:text-5xl" >workout to lose fat</h2>

            <p className=" mt-4 text-[#262524] text-[16px] text-justify leading-7  opacity-50">
            Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
            </p>

            <a
              href="#"
              className="mt-10 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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
          </div>
          <div className="mx-auto max-w-xl">
          <Image src="/Fearure.png" alt="fearure_img" width={570} height={496}></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
