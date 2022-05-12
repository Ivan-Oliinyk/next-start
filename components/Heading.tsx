import { FC } from "react";
import { HeadingType } from "../type";

const Heading: FC<HeadingType> = ({ text, tag }) => {
  const Tag = tag || "h1";

  return <Tag>{text}</Tag>;
};

export default Heading;
