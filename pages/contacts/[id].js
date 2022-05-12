import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ contact }) => {
  return (
    <>
      <Heading text="Contact:" />
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
