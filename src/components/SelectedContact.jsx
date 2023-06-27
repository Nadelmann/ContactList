import { useState, useEffect } from "react";

export default function SelectedContactView({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(setSelectedContactId);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const resultView = await response.json();
        console.log(resultView);
        setContact(resultView);
      } catch (errorView) {
        console.error(errorView);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact && <h1>{contact.name}</h1>}
    </div>
  );
}
