"use client"

import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Carousel from '@/components/Carousel'
import getResults from '@/utils/cachedImages'
import cloudinary from '@/utils/cloudinary'
import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'
import type { PhotoType } from '@/utils/types'
import { getCldImageUrl } from 'next-cloudinary';

const Home: NextPage<{ currentPhoto: PhotoType }> = ({  }) => {
  const [currentPhoto, setCurrentPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/photo`);
        const data = await res.json();
        const currentPhoto = data[0];
        console.log('data', data.result.resources[0].url);
        setCurrentPhoto(currentPhoto);
      } catch (err) {
        console.error('fetch error', err);
      }
    };

    fetchData();
  }, []);

  // console.log('fart', currentPhoto);

  return (
    <>
      <Head>
        <title>Very Still Photos</title>
        {/* <meta property="og:image" content={photoUrl} /> */}
        {/* <meta name="twitter:image" content={photoUrl} /> */}
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        {/* <Carousel currentPhoto={currentPhoto} index={index} /> */}
        hello
      </main>
    </>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch(`/api/photo`)
//     .then(res => {
//       console.log('status', res.status);
//       return res.json();
//     })
//     .catch(err => {
//       console.error('fetch error', err);
//     });

//   const currentPhoto = res[0];
//   console.log('currentPhoto', currentPhoto);

//   return { currentPhoto };
// }

export default Home;
