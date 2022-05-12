import Head from "next/head";
import Heading from "../components/Heading";

const Post = () => (
  <>
    <Head>
      <title>Post</title>
    </Head>
    <div>
      <Heading text={"Posts list: "} />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in quod
        dolores officia aliquam aut voluptatibus ipsa beatae animi blanditiis,
        corrupti aliquid expedita, numquam, dolorum ipsum non explicabo
        exercitationem illo? Explicabo, ad, repudiandae quis velit dolorum
        maxime reprehenderit quaerat fuga temporibus atque voluptatem maiores.
        Natus odit inventore, asperiores ipsa non commodi numquam alias iure vel
        error impedit dolores exercitationem obcaecati.
      </p>
    </div>
  </>
);

export default Post;
