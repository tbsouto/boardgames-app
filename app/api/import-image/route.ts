import { auth } from "@/auth";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name:
    process.env.CLOUDINARY_CLOUD_NAME,
  api_key:
    process.env.CLOUDINARY_API_KEY,
  api_secret:
    process.env.CLOUDINARY_API_SECRET,
});

export async function POST(
  req: Request
) {

  const session =
    await auth();

  if (!session) {

    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );

  }

  try {

    const { imageUrl } =
      await req.json();

    const result =
      await cloudinary.uploader.upload(
        imageUrl,
        {
          folder:
            "boardgames",
        }
      );

    return NextResponse.json({
      url:
        result.secure_url,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          "Error importando imagen",
      },
      {
        status: 500,
      }
    );

  }

}