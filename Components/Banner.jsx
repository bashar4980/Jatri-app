import Image from "next/image";
import React from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  const MenuItems = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Program</a>
      </li>

      <li>
        <a>Blog</a>
      </li>

      <li>
        <a>About us</a>
      </li>
      <li>
        <a className="inline-flex items-center rounded border border-[#264373] bg-[#264373]  py-[5px] px-8  text-white hover:bg-transparent hover:text-[#264373]  font-bold">
          Login
        </a>
      </li>
    </>
  );
  return (
    <div className="banner">
      <section className="container mx-auto">
        <div className="navbar bg-transparent ">
          <div className="navbar-start flex">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {MenuItems}
              </ul>
            </div>
            <a className="text-[20px]">
              <span className="bg-[#6765F0] rounded-lg text-white  pb-1 px-1 items-center">
                Gym
              </span>
              <span className="text-[#6765F0]"> baran</span>
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{MenuItems}</ul>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 order-last lg:h-full">
              <Image
                src="/Hero.png"
                width={584}
                height={580}
                alt="hero"
              ></Image>
            </div>

            <div className="lg:py-24 ">
              <h2 className="text-3xl font-bold  sm:text-6xl ">
                Healthy in side<br></br>
                <span className="text-[#8382EB] ">freash</span> out side
              </h2>

              <p className="mt-4 text-gray-600 text-[12px] lg:text-[16px] max-w-[420px] text-justify">
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-sm">
                <button
                  href="#"
                  className="mt-8 rounded border border-[#264373] bg-[#264373] px-[10px] text-white hover:bg-transparent hover:text-[#264373] focus:outline-none focus:ring active:text-[#264373]"
                >
                  <div className="flex justify-between">
                    <span className="text-sm font-medium"> Get Started </span>

                    <FaArrowAltCircleRight className="ml-5 "></FaArrowAltCircleRight>
                  </div>
                </button>
                <a
                  href="#"
                  className="mt-8 lg:ml-5 inline-flex items-center rounded border border-[#264373] hover:bg-[#264373] px-6 py-3 text-[#264373] bg-transparent hover:text-white focus:outline-none focus:ring "
                >
                  <FaArrowAltCircleRight className="mr-5"></FaArrowAltCircleRight>
                  <span className="text-sm font-medium">Learn More</span>
                </a>
              </div>

              <h2 className="my-6">Brands:</h2>
              <Image
                alt="next/brand_img"
                src="/brand.png"
                width={420}
                height={63}
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
