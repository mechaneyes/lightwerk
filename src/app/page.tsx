import { NextPage, Metadata } from "next";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import type { PhotoType } from "@/utils/types";

async function fetchData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/photo?cloudinary_folder=recognition`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } 

  return res.json();
}

// https://medium.com/@moh.mir36/open-graph-with-next-js-v13-app-directory-22c0049e2087
// 
export const metadata: Metadata = {
  metadataBase: new URL('https://lightwerk.digital/'),
  title: "Shadowing",
  description: "We are the Dreamers of the Dream",
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dhbk213bt/image/upload/v1706917124/lightwerk/og/og-shadowing.jpg',
      },
    ],
  },
};

const Nucleus: NextPage<{}> = async ({}) => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = await fetchData();
  const fetchedPhotos = data.result.resources;
  // console.log('data', data.result.resources)

  return (
    <>
      <main className="gallery gallery--carousel">
        <Carousel {...carouselSettings}>
          {fetchedPhotos.map((photo: PhotoType, index: number) => (
            <div key={index} className="slide-holder">
              <Image
                // src={photo?.url.replace(".png", ".gif") ?? ""}
                src={photo?.url}
                width={1280}
                height={1280}
                quality={100}
                alt={`Hexagram Facial Recognition: ${photo?.filename}`}
                priority={true}
              />
              <h3>{photo?.filename}</h3>
            </div>
          ))}
        </Carousel>
      </main>
    </>
  );
};

export default Nucleus;
