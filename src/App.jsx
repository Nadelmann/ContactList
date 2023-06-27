import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
// import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactID, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactID ? (
        <div>Selected Contact View</div>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}


