const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(({ id, name, email }) => (
          <li key={id}>
            <strong>{name}</strong>({email})
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
