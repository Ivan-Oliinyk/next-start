import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

const { wrapper } = styles;

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.API_HOST}/${process.env.ROUTE_SOCIAL}/`
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      socials: data,
    },
  };
};

const Home = ({ socials }) => {
  return (
    <div className={wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Aplication " />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
