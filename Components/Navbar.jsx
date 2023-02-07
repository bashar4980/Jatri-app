
import React from "react";

const Navbar = () => {

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
            <a className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8  text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 font-bold">Login</a>
           </li>

          
        </>
    )
  return (
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
        <a className="text-[20px]"><span className="bg-[#6765F0] rounded-lg text-white  pb-1 px-1 items-center">Gym</span><span className="text-[#6765F0]"> baran</span></a>
     
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {MenuItems}
        </ul>
      </div>
     
    </div>
  );
};

export default Navbar;
