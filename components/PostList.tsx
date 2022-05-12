import Link from "next/link";
import { FC } from "react";
import styles from "../styles/Posts.module.scss";

type PostProps = {
  posts: { id: string | number; title: string }[];
};

const PostsList: FC<PostProps> = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts &&
        posts.map(({ id, title }, idx) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{idx + 1 + ") " + title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default PostsList;
