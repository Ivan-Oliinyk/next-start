import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
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

const Contact = ({ contact }) => {
  console.log("contact ===>", contact);

  return (
    <>
      <Heading text="Contact:" />
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
