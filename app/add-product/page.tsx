import Image from "next/image";
import React from "react";

const AddProduct = () => {
  return (
    <div className="px-4 md:px-12 bg-[#F8F9FA] pb-8">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full max-w-xl mx-auto">
        Add a new product
      </h2>

      <form className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5">
        <Image
          src="/watch-img.jpg"
          alt="img"
          width={1000}
          height={1000}
          className="max-w-full max-h-72 object-cover object-center rounded-lg"
        />
        <div className="flex flex-col w-full">
          <label className="">Product Image:</label>
          <input
            type="file"
            accept="image/*"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg  bg-white border border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="">Name:</label>
          <input
            type="text"
            placeholder="Enter the product name"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="">Price:</label>
          <input
            type="number"
            placeholder="Enter the product price"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="">Seller's Link:</label>
          <input
            type="text"
            placeholder="Link to where buyers can find you"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="">Description:</label>
          <textarea
            rows={4}
            placeholder="Enter the product description"
            className="w-full px-3 py-1.5 resize-none md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#212529] hover:bg-[#343A40] text-white px-3 py-2 rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
