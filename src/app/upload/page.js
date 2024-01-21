"use client";

// import * as cloudinary from "cloudinary";
// import UploadWidget from "@/components/UploadWidget";
import { CldUploadWidget } from "next-cloudinary";

export function ImageUpload() {
  //   const [isImagUploaded, setIsImageUploaded] = useState(false);

  //   async function handleWidgetClick() {
  //     const widget = cloudinary.createUploadWidget(
  //       {
  //         cloudName: "dhbk213bt",
  //         uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
  //         resourceType: "image",
  //         folder: "winterwerk",
  //         use_filename: true,
  //       },
  //       (error, result) => {
  //         if (!error && result && result.event === "success") {
  //           console.log("Uploaded", result.info);
  //           setIsImageUploaded(true);
  //         } else if (error) {
  //           console.log(error);
  //         }
  //       }
  //     );

  //     widget.open();
  //   }

  const handleUpload = (result) => {
    if (result.info.secure_url) {
      // Successful upload
      console.log("Upload successful. Secure URL:", result.info.secure_url);
    } else {
      // Handle the error
      console.error("Upload failed. Error message:", result.info.error.message);
    }
  };

  return (
    <div>
      <CldUploadWidget
        options={{
          name: "dhbk213bt",
          folder: "winterwerk",
          singleUploadAutoClose: true,
          useFilename: true,
          sources: ["local"],
        }}
        signatureEndpoint="/api/sign-image"
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
        // useFilename={true}
        onUpload={handleUpload}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return <button onClick={handleOnClick}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
}

export default ImageUpload;
