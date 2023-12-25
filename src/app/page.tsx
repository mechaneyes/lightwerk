import { NextPage, Metadata } from "next";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import type { PhotoType } from "@/utils/types";

async function fetchData() {
  const res = await fetch(`https://lightwerk.vercel.app/api/photo`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// https://medium.com/@moh.mir36/open-graph-with-next-js-v13-app-directory-22c0049e2087
// 
export const metadata: Metadata = {
  title: "Thirdeyes Colorways",
  description: "Color Options for the Thirdeyes Chat Interface",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
  openGraph: {
    title: "Thirdeyes Colorways",
    description: "Color Options for the Thirdeyes Chat Interface",
    images: [
      {
        url: 'https://lightwerk.vercel.app/thirdeyesViaLightwerk.gif',
      },
    ],
  },
};

const Thirdeyes: NextPage<{}> = async ({}) => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = await fetchData();
  const fetchedPhotos = data.result.resources;

  return (
    <>
      <main className="gallery gallery--carousel">
        <Carousel {...carouselSettings}>
          {fetchedPhotos.map((photo: PhotoType, index: number) => (
            <div key={index} className="slide-holder">
              <Image
                src={photo?.url.replace(".png", ".gif") ?? ""}
                width={1584}
                height={800}
                quality={100}
                alt={`Thirdeyes Colorway: ${photo?.filename}`}
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

export default Thirdeyes;
