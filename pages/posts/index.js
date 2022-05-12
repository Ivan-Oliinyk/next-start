import Head from "next/head";
import Heading from "../../components/Heading";
import PostsList from "../../components/PostList";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      posts: data,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts" />
      <PostsList posts={posts} />
    </>
  );
};

export default Posts;
