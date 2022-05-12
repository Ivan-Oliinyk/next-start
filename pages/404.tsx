import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  console.log(router);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Heading text="404" />
      <Heading tag="h2" text="Something is goin wrong" />
    </>
  );
};

export default Error;
