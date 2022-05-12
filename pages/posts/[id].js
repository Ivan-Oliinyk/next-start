import Heading from "../../components/Heading";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  console.log("=====", post);

  return (
    <>
      <Heading text={`Post: ${post.id}`} />
      <PostInfo post={post} />
    </>
  );
};

export default Post;