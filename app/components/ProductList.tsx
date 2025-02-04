import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  const products = ["", "", "", "", "", ""];
  return (
    <div className="px-4 md:px-12 py-10 flex justify-center items-center" id="product">
        <div className="grid grid-cols-4 gap-5">
      {products.map((product, index) => (
        <Link href="/product/123" key={index}>
          <Image
            src="/watch-img.jpg"
            alt="img"
            width={1000}
            height={1000}
            className="max-w-[17rem] max-h-72 object-cover object-center rounded-lg"
          />

          <div className="mt-4">
            <h2 className="font-semibold text-lg">Eterna Royale</h2>
            <p className="font-medium text-sm mt-1">$4,999</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
