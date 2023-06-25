import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactLIst';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);
  return (
    <>
      {selectedContactID ? (
        <div>Selected Contact View</div>
      ) : (
      <ContactList />
      )}
    </>
  );
}


