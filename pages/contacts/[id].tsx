import { GetServerSideProps } from "next";
import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";
import { FC } from "react";
import { ContactType } from "../../type";

type ContactProps = {
  contact: ContactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      contact: data,
    },
  };
};

const Contact: FC<ContactProps> = ({ contact }) => {
  return (
    <>
      <Heading text="Contact:" />
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
