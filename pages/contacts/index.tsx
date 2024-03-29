import { GetStaticProps } from "next";
import { FC } from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import ContactsList from "../../components/ContactsList";
import { ContactType } from "../../type";

type ContactProps = {
  contacts: ContactType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      contacts: data,
    },
  };
};

const ContactHome: FC<ContactProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Home contact" />
      <ContactsList contacts={contacts} />
    </>
  );
};

export default ContactHome;
