import React from "react";
import styles from "./PhonebookContacts.module.css";
import PropTypes from "prop-types";

const PhonebookContacts = ({ contacts, removeContact }) => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contact__title}>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contact__list}>
            <span className={styles.contact__span}>
              {contact.name}:
              <a href={`tel:+38${contact.mumber}`}> {contact.number}</a>
            </span>
            <button
              className={styles.contact__btn}
              onClick={() => removeContact(contact.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonebookContacts;

PhonebookContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
