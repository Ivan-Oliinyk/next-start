import Heading from "./Heading";

const ContactInfo = ({ post }) => {
  const { id, title, body } = post || {};

  return (
    <>
      {!post ? (
        <Heading tag="h3" text="Posts is Empty" />
      ) : (
        <>
          {/* <Heading tag="h3" text={id} /> */}
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
