import cloudinary from "@/utils/cloudinary";
import { connectDB } from "../../db/connectDB";
import Product from "../../models/product.model";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  await connectDB();
  const productId = (await params).productId;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return Response.json({ message: "Product not found." }, { status: 400 });
    }

    return Response.json({ product }, { status: 200 });
  } catch (error: any) {
    console.log("Error in getting product", error);
    return Response.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  await connectDB();
  const productId = (await params).productId;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return Response.json({ message: "Product not found." }, { status: 400 });
    }

    // Delete the image first
    const parts = product.image.split("/");
    const fileName = parts[parts.length - 1]; // Extract the last part: "ihwklaco9wt2d0kqdqrs.png"
    const imageId = fileName.split(".")[0];
    cloudinary.uploader
      .destroy(`zwatches/${imageId}`)
      .then((result) => console.log("result: ", result));

    // Then delete from database
    await Product.findByIdAndDelete(productId);

    return Response.json({ message: "Product deleted successfully." }, { status: 200 });
  } catch (error) {}
}
