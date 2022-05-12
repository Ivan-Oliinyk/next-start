import { FC } from "react";
import Heading from "./Heading";
import { ContactType } from "../type";

type ContactInfoProps = {
  contact: ContactType;
};

const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { name, email, phone, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  return (
    <>
      {!contact ? (
        <Heading tag="h3" text="Contact is Empty" />
      ) : (
        <>
          <Heading tag="h3" text={name} />
          <div>
            <strong>Email: </strong>
            {email}
          </div>
          <div>
            <strong>Phone: </strong>
            {phone}
          </div>
          <div>
            <strong>Address: </strong>
            {`${street}, ${suite} , ${city}, ${zipcode}`}
          </div>
        </>
      )}
    </>
  );
};

export default ContactInfo;
