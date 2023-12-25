"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";
import type { PhotoType } from "@/utils/types";

const Home: NextPage<{ currentPhoto: PhotoType }> = ({}) => {
  const [allPhotos, setAllPhotos] = useState<PhotoType[] | null>(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/photo`);
      const data = await res.json();
      const fetchedPhotos = data.result.resources;
      setAllPhotos(fetchedPhotos);
      console.log("fetchedPhotos", fetchedPhotos);
    } catch (err) {
      console.error("fetch error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Very Still Photos</title>
      </Head>

      <main className="gallery gallery--carousel">
        <Slider {...carouselSettings}>
          {allPhotos &&
            allPhotos.map((photo, index) => (
              <div key={index} className="slide-holder">
                <Image
                  src={photo?.url.replace(".png", ".gif") ?? ""}
                  width={1584}
                  height={800}
                  quality={100}
                  alt="Thirdeyes Layout"
                />
                <h3>{photo?.filename}</h3>
              </div>
            ))}
        </Slider>
      </main>
    </>
  );
};

export default Home;
