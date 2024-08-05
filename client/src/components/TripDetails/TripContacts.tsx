import classes from "./TripContacts.module.scss";

interface TripContactsProps {
  tripContacts:
    | {
        phone1: string;
        phone2: string;
        phone3: string;
        email1: string;
        email2: string;
        payment_instructions: string;
        additional_description: string;
        payment_reference: string;
      }
    | {
        phone1: string;
        phone2: string;
        phone3: string;
        email1: string;
        email2: string;
        payment_instructions: string;
        additional_description: string;
        payment_reference: string;
      }[];
}

export default function TripContacts({ tripContacts }: TripContactsProps) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Zgłoszenia prosimy kierować na:</h1>
      </div>
      {Array.isArray(tripContacts) ? (
        tripContacts.length > 0 ? (
          tripContacts.map((contact, index) => (
            <div key={index}>
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
          ))
        ) : (
          <div className={classes["no-data"]}>
            Brak danych kontaktowych do wyświetlenia.
          </div>
        )
      ) : (
        <div>
          <div className={classes.contacts}>
            <h2>Telefon:</h2>
            {tripContacts.phone1 && <p>{tripContacts.phone1}</p>}
            {tripContacts.phone2 && <p>{tripContacts.phone2}</p>}
            {tripContacts.phone3 && <p>{tripContacts.phone3}</p>}
            <h2>Email:</h2>
            {tripContacts.email1 && <p>{tripContacts.email1}</p>}
            {tripContacts.email2 && <p>{tripContacts.email2}</p>}
          </div>
          {tripContacts.additional_description && (
            <div className={classes["additional-description"]}>
              <p>{tripContacts.additional_description}</p>
            </div>
          )}
          {tripContacts.payment_instructions && (
            <div className={classes["payment-instructions"]}>
              {tripContacts.payment_instructions}
            </div>
          )}
          {tripContacts.payment_reference && (
            <div className={classes["payment-reference"]}>
              <p>{tripContacts.payment_reference}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
