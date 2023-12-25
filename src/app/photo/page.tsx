// "use client";

// import { useEffect, useState } from "react";
// import { GetServerSideProps, NextPage } from "next";
// import Image from "next/image";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import Carousel from "@/components/Carousel";
// import getResults from "@/utils/cachedImages";
// import cloudinary from "@/utils/cloudinary";
// import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
// import type { PhotoType } from "@/utils/types";
// import { getCldImageUrl } from "next-cloudinary";

// const Home: NextPage<{ currentPhoto: PhotoType }> = ({}) => {
//   const [currentPhoto, setCurrentPhoto] = useState<PhotoType | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`/api/photo`);
//         const data = await res.json();
//         const retrievedPhoto = data.result.resources[0];
//         setCurrentPhoto(retrievedPhoto);
//         console.log("retrievedPhoto", retrievedPhoto);
//       } catch (err) {
//         console.error("fetch error", err);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log("fart", currentPhoto);

//   return (
//     <>
//       <Head>
//         <title>Very Still Photos</title>
//         {/* <meta property="og:image" content={photoUrl} /> */}
//         {/* <meta name="twitter:image" content={photoUrl} /> */}
//       </Head>
//       <main className="mx-auto max-w-[1960px] p-4">
//         {/* <Carousel currentPhoto={currentPhoto} index={index} /> */}
//         {currentPhoto ? (
//           <Image
//             src={currentPhoto?.url ?? ""}
//             width={1584}
//             height={800}
//             quality={100}
//             alt="Thirdeyes Layout"
//           />
//         ) : null}
//       </main>
//     </>
//   );
// };

// export default Home;
