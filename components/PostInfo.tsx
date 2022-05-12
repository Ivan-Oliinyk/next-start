import Heading from "./Heading";
import { PostType } from "../type";
import { FC } from "react";

type ContactInfoProps = {
  post: PostType;
};

const ContactInfo: FC<ContactInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  return (
    <>
      {!post ? (
        <Heading tag={"h3"} text="Posts is Empty" />
      ) : (
        <>
          <div>
            <strong>Title </strong>
            {title}
          </div>
          <div>
            <strong>body: </strong>
            {body}
          </div>
        </>
      )}
    </>
  );
};

export default ContactInfo;
