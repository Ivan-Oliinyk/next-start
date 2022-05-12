import {AppProps} from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import Layout from "../layouts/Layout";
import Image from "next/image";
import youtubeImg from "../public/youtube.png";
import { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image
        src={youtubeImg}
        width={300}
        height={300}
        alt="previews"
        placeholder="blur"
      /> */}
    </Layout>
  );
};

export default MyApp;
