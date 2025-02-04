"use client";

import ProductList from "@/app/components/ProductList";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 md:px-12 bg-[#F8F9FA]">
      <p className="cursor-pointer py-3" onClick={() => router.back()}>
        &larr; Back
      </p>

      <div className="max-w-5xl mx-auto flex justify-between space-x-10">
        <Image
          src="/watch-img.jpg"
          alt="img"
          width={1000}
          height={1000}
          className="max-w-xl max-h-[35rem] object-cover object-center basis-1/2"
        />

        <div className="basis-1/2 py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Eterna Royale</h2>

            <div className="text-2xl font-bold -mt-2 relative">
              <span
                onClick={() => setOpen(!open)}
                className="cursor-pointer tracking-widest"
              >
                ...
              </span>

              {open && (
                <div className="absolute bg-white shadow-md pb-2 px-5 text-base font-normal right-0 top-10">
                  <Link href={`/product/123/update`}>
                    <p className="mb-2 pb-2 border-b border-gray-300">Update</p>
                  </Link>
                  <p className="text-red-500 cursor-pointer">Delete</p>
                </div>
              )}
            </div>
          </div>

          <h3 className="text-3xl font-semibold mt-3">$4999</h3>

          <button className="mt-8 bg-[#212529] hover:bg-[#343A40] text-white px-3 py-2 w-full font-semibold">
            Contact Seller
          </button>

          <p className="font-semibold mt-10 text-lg">Description</p>
          <p className="mt-1">
            The Eterna Royale is a classic and elegant timepiece designed for
            those who appreciate style and precision. It features a Swiss
            automatic movement for reliable timekeeping, a scratch-resistant
            sapphire crystal, and an 18K gold-plated case that adds a touch of
            luxury. The hand-stitched leather strap provides comfort, while its
            100M water resistance ensures durability for everyday wear. Whether
            for formal events or daily use, the Eterna Royale is a perfect blend
            of sophistication and performance.
          </p>
        </div>
      </div>

      <h2 className="w-full text-2xl font-semibold pt-20">
        You might also like
      </h2>
      <ProductList />
    </div>
  );
};

export default ProductPage;
