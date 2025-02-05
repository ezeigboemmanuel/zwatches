import { connectDB } from "../db/connectDB";

export async function POST(request: Request) {
  try {
    await connectDB();

    const formData = await request.formData();
    // Parse JSON from FormData
    const data = JSON.parse(formData.get("data") as string);
    // Get all data minus the image
    const { name, price, link, description } = data;

    // Handle profile image upload
    const image = formData.get("image") as File;
    let imageURL;

    if (image) {
      // upload the image
    //   const uploadResult: any = await UploadImage(image, "zwatch");
    //   imageURL = uploadResult.secure_url as string;
    }
  } catch (error) {}
}
