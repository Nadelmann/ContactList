// import PropTypes from 'prop-types';

export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr className='list' onClick={()=>{ setSelectedContactId(contact)}}>  
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
}
 
