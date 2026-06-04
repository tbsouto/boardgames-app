import { auth } from "@/auth";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({

    cloud_name:
        process.env
            .CLOUDINARY_CLOUD_NAME,

    api_key:
        process.env
            .CLOUDINARY_API_KEY,

    api_secret:
        process.env
            .CLOUDINARY_API_SECRET,

});

export async function POST(
    req: Request
) {
    const session = await auth();

    if (!session) {

        return Response.json(
            { error: "Unauthorized" },
            { status: 401 }
        );

    }
    try {

        const formData =
            await req.formData();

        const file =
            formData.get("file");

        if (
            !file ||
            typeof file === "string"
        ) {

            return NextResponse.json(
                {
                    error:
                        "Invalid file"
                },
                { status: 400 }
            );

        }
        const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
        ];

        if (
            !allowedTypes.includes(
                file.type
            )
        ) {

            return NextResponse.json(
                {
                    error:
                        "Formato no permitido",
                },
                {
                    status: 400,
                }
            );

        }
        if (
            file.size >
            5 * 1024 * 1024
        ) {

            return NextResponse.json(
                {
                    error:
                        "Máximo 5 MB",
                },
                {
                    status: 400,
                }
            );

        }
        const bytes =
            await file.arrayBuffer();

        const buffer =
            Buffer.from(bytes);

        const result =
            await new Promise<any>(
                (
                    resolve,
                    reject
                ) => {

                    cloudinary.uploader
                        .upload_stream(

                            {
                                folder:
                                    "boardgames",
                            },

                            (
                                error,
                                result
                            ) => {

                                if (error)
                                    reject(error);

                                else
                                    resolve(result);

                            }

                        )
                        .end(buffer);

                }
            );

        return NextResponse.json({
            url:
                result.secure_url
        });

    } catch (error) {

        console.error(
            "UPLOAD ERROR:",
            error
        );

        return NextResponse.json(
            {
                error
            },
            { status: 500 }
        );

    }

}