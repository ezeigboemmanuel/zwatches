import { connectDB } from "../../db/connectDB";
import Product from "../../models/product.model";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const id = (await params).id;
  try {
    const product = await Product.findById(id);

    if (!product) {
      return Response.json({ message: "Product not found." }, { status: 400 });
    }

    return Response.json({ product }, { status: 200 });
  } catch (error: any) {
    console.log("Error in getting product", error);
    return Response.json({ message: error.message }, { status: 400 });
  }
}
