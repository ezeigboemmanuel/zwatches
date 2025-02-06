"use client"

import React from "react";
import UpdateForm from "@/components/UpdateForm";
import { useParams } from "next/navigation";

const UpdateProduct = () => {
  const params = useParams();

  console.log(params)
  return (
    <div className="px-4 md:px-12 bg-[#F8F9FA] pb-8">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full max-w-xl mx-auto">
        Update product
      </h2>

      <UpdateForm id={params.id as string}/>
    </div>
  );
};

export default UpdateProduct;
