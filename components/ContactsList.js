import Link from "next/link";

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
