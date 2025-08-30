import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret,
    cloud_name: process.env.cloudinary_name,
});

export default cloudinary;