import React, { useState, useEffect } from "react";

export default function SelectedContactView({ selectedContactId, setSelectedContactId, onBack }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const resultView = await response.json();
        console.log(resultView);
        setContact(resultView);
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
    <div>
      <h1>{contact.name}</h1>
      <h2>Email: {contact.email}</h2>
      <h2>Phone: {contact.phone}</h2>
      <h2>Website: {contact.website}</h2>
      <button onClick={onBack}>Back</button>
    </div>
  );
}
