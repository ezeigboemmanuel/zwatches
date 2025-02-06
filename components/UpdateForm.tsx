"use client";

import { updateProduct } from "@/utils/updateProduct";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const UpdateForm = ({ id }: { id: string }) => {
  const [imageUrl, setImageUrl] = useState<string | StaticImport>("");
  const router = useRouter();
  async function clientUpdateProduct(formData: FormData) {
    const result = await updateProduct(formData, id);
    if (result.error) {
      toast.error(result.error);
    }

    if (result.success) {
      toast.success(result.success);
      router.push("/");
    }

    setImageUrl("");
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSize = file.size;
      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("Image greater than 1mb is not accepted.");
      } else {
        setImageUrl(URL.createObjectURL(file));
      }
    }
  };

  return (
    <form
      action={clientUpdateProduct}
      className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="img"
          width={1000}
          height={1000}
          className="max-w-full max-h-72 object-cover object-center rounded-lg"
        />
      ) : null}
      <div className="flex flex-col w-full">
        <label className="">Product Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg  bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter the product name"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="">Price:</label>
        <input
          type="number"
          name="price"
          placeholder="Enter the product price"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="">Seller's Link:</label>
        <input
          type="text"
          name="link"
          placeholder="Link to where buyers can find you"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="">Description:</label>
        <textarea
          rows={4}
          name="description"
          placeholder="Enter the product description"
          className="w-full px-3 py-1.5 resize-none md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#212529] hover:bg-[#343A40] text-white px-3 py-2 rounded-md"
      >
        Update Product
      </button>
    </form>
  );
};

export default UpdateForm;
