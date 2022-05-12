import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

const { wrapper } = styles;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={wrapper}>
      <Heading text="HEllow world" />
    </div>
  </>
);

export default Home;
