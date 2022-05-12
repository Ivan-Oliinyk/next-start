import Link from "next/link";

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts &&
        posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default PostsList;
