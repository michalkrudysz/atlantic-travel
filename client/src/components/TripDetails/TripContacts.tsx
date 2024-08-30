import classes from "./TripContacts.module.scss";

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

type TripContactsProps = {
  tripContacts: Contact[];
};

const ContactDetails = ({ contact }: { contact: Contact }) => (
  <div>
    <div className={classes.contacts}>
      <h2>Telefon:</h2>
      {contact.phone1 && <p>{contact.phone1}</p>}
      {contact.phone2 && <p>{contact.phone2}</p>}
      {contact.phone3 && <p>{contact.phone3}</p>}
      <h2>Email:</h2>
      {contact.email1 && <p>{contact.email1}</p>}
      {contact.email2 && <p>{contact.email2}</p>}
    </div>
    {contact.additional_description && (
      <div className={classes["additional-description"]}>
        <p>{contact.additional_description}</p>
      </div>
    )}
    {contact.payment_instructions && (
      <div className={classes["payment-instructions"]}>
        {contact.payment_instructions}
      </div>
    )}
    {contact.payment_reference && (
      <div className={classes["payment-reference"]}>
        <p>{contact.payment_reference}</p>
      </div>
    )}
  </div>
);

export default function TripContacts({ tripContacts }: TripContactsProps) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Zgłoszenia prosimy kierować na:</h1>
      </div>
      {tripContacts.length > 0 ? (
        tripContacts.map((contact, index) => (
          <ContactDetails key={index} contact={contact} />
        ))
      ) : (
        <div className={classes["no-data"]}>
          Brak danych kontaktowych do wyświetlenia.
        </div>
      )}
    </div>
  );
}
