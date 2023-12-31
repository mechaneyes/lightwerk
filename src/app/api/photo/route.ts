import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression("folder:thirdeyes")
      .sort_by("public_id", "asc")
      .max_results(30)
      .execute()
      // .then((result) => console.log(result));

    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
