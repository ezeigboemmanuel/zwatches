import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-[#fff] px-4 md:px-12 text-black">
      <div className="max-w-2xl">
        <h1 className="text-7xl leading-tight font-semibold">Timeless Elegance on Your Wrist</h1>
        <p className="text-[#495057] mt-4">
          Discover our curated collection of premium watches, crafted for those
          who appreciate sophistication and precision.
        </p>
        <button className="mt-8 bg-[#212529] hover:bg-[#343A40] text-white px-3 py-2 rounded-md">Shop the Collection</button>
      </div>
      <div>
        <Image src="/hero-img.png" alt="img" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
