import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContactView from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <div><SelectedContactView selectedContactId={selectedContactId} 
        setSelectedContactId={setSelectedContactId}/></div>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}


