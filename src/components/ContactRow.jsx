// import PropTypes from 'prop-types';

export default function ContactRow({ setSelectedContactId, contact }) {
  console.log(contact)
    return (
      <tr className='list' onClick={()=>{ setSelectedContactId(contact.id)}}>  
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
}
 
