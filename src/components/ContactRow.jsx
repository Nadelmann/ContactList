import PropTypes from 'prop-types';

export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr className='list' onClick={()=>{ setSelectedContactId(contact.id)}}>  
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
}

ContactRow.propTypes = {
  setSelectedContactId: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};