import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 md:px-12 py-4 md:py-6 bg-white text-black">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">
          Zwatches
        </Link>
        <div className="hidden md:inline-block relative w-[300px] ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-black/[0.7]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            className="h-[36px] relative pl-10 border-[1px] border-black/[0.7] text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline bg-transparent"
            id="links"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="bg-[#212529] hover:bg-[#343A40] text-white px-3 py-2 rounded-md">
          Add Product
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
