import Link from "next/link";
import styles from "../styles/Posts.module.scss";

const PostsList = ({ posts }) => {
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
