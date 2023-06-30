import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        console.log(result);
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div onClick={() => SelectedContact(contact)}>
      <h1>{contact.name}</h1>
      <h2>Email: {contact.email}</h2>
      <h2>Phone: {contact.phone}</h2>
      <h2>Website: {contact.website}</h2>
      <h2>Username: {contact.username}</h2>
      <h2>Address: {contact.address}</h2>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </div>
  );
}
