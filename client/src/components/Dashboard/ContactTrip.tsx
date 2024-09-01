import React from "react";
import classes from "./ContactTrip.module.scss";

type Contact = {
  phone1?: string;
  phone2?: string;
  phone3?: string;
  email1?: string;
  email2?: string;
  payment_instructions?: string;
  additional_description?: string;
  payment_reference?: string;
};

type ContactTripProps = {
  tripContacts: Contact[];
};

const ContactTrip: React.FC<ContactTripProps> = ({ tripContacts }) => {
  return (
    <div className={classes["trip-contact"]}>
      <div className={classes["contact-info"]}>Dane kontaktowe:</div>
      <div className={classes["contact-details"]}>
        {tripContacts.map((contact, index) => (
          <div key={index}>
            {contact.phone1 && (
              <div
                className={classes.phone}
              >{`Telefon: ${contact.phone1}`}</div>
            )}
            {contact.phone2 && (
              <div
                className={classes.phone}
              >{`Telefon: ${contact.phone2}`}</div>
            )}
            {contact.phone3 && (
              <div
                className={classes.phone}
              >{`Telefon: ${contact.phone3}`}</div>
            )}
            {contact.email1 && (
              <div className={classes.email}>{`Email: ${contact.email1}`}</div>
            )}
            {contact.email2 && (
              <div className={classes.email}>{`Email: ${contact.email2}`}</div>
            )}
            {contact.payment_instructions && (
              <div className={classes["payment-instructions"]}>
                {`Instrukcje płatności: ${contact.payment_instructions}`}
              </div>
            )}
            {contact.additional_description && (
              <div className={classes["additional-description"]}>
                {`Dodatkowe informacje: ${contact.additional_description}`}
              </div>
            )}
            {contact.payment_reference && (
              <div className={classes["payment-reference"]}>
                {`Referencje płatności: ${contact.payment_reference}`}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={classes["actions"]}>
        <button>Edytuj</button>
      </div>
    </div>
  );
};

export default ContactTrip;
