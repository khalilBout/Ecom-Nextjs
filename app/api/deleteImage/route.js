// import fs from "fs/promises";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const POST = async (request) => {
  const body = await request.json();
  try {
    const result = await cloudinary.v2.uploader.destroy(body);
    return new NextResponse("image has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error", { status: 500 });
  }
};

// const deleteImage = (id) => {
//   cloudinary.v2.deleteImage(id);
//   console.log(id);
// };

// export { cloudinary };
