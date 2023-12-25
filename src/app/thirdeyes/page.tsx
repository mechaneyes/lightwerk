import { NextPage } from "next";
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

export const metadata = {
  title: "Thirdeyes Colorways",
  description: "Color Options for the Thirdeyes Chat Interface",
};

const Thirdeyes: NextPage<{}> = async ({}) => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // const data = await fetchData();
  // const fetchedPhotos = data.result.resources;

  return (
    <>
      <main className="gallery gallery--carousel">
        {/* <Carousel {...carouselSettings}>
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
        </Carousel> */}
      </main>
    </>
  );
};

export default Thirdeyes;
