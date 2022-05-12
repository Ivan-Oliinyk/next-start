import Head from "next/head";
import Heading from "../../components/Heading";
import ContactsList from "../../components/ContactsList";

export const getStaticProps = async () => {
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

const ContactHome = ({ contacts }) => {
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
