"use server";

import { connectDB } from "@/app/api/db/connectDB";
import Product from "@/app/api/models/product.model";
import cloudinary from "@/utils/cloudinary";

export async function updateProduct(formData: FormData, id: string) {
  try {
    const image = formData.get("image") as File;
    const name = formData.get("name");
    const price = formData.get("price");
    const link = formData.get("link");
    const description = formData.get("description");

    if (!name || !price || !link || !description) {
      return {
        error: "Only the image is not required.",
      };
    }

    await connectDB();

    const product = await Product.findById(id);

    if (!product) {
      return {
        error: "No product found.",
      };
    }

    if (!image) {
      // Update without image
      await Product.findByIdAndUpdate(id, {
        name,
        price,
        link,
        description,
      });

      return {
        success: "Product updated successfully",
      };
    } else {
      // Image processes
      const arrayBuffer = await image.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      const imageResponse: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "auto",
              folder: "zwatches",
            },
            async (error, result) => {
              if (error) {
                return reject(error.message);
              }
              return resolve(result);
            }
          )
          .end(buffer);
      });

      console.log("Image response: ", imageResponse);

      // Store in db
      await Product.findByIdAndUpdate(id, {
        image: imageResponse.secure_url,
        name,
        price,
        link,
        description,
      });

      return {
        success: "Product updated successfully",
      };
    }
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
}
