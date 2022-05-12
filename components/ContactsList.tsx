import Link from "next/link";
import { FC } from "react";

type Contacts = {
  id: string | number;
  name: string;
};

type ListProps = {
  contacts: Contacts[];
};

const ContactsList: FC<ListProps> = ({ contacts }) => {
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
