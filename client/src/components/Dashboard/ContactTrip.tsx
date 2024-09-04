import { useState } from "react";
import classes from "./ContactTrip.module.scss";
import { useModifyContactTrip } from "../../hooks/useModifyContactTrip"; // Ensure this path is correct

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
  tripId: number;
};

const ContactTrip: React.FC<ContactTripProps> = ({ tripContacts, tripId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Contact>(tripContacts[0] || {});
  const [contacts, setContacts] = useState<Contact[]>(tripContacts); // New state for tripContacts
  const modifyContactTrip = useModifyContactTrip();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    modifyContactTrip(
      {
        trip_id: tripId,
        contactInfo: formData,
      },
      {
        onSuccess: () => {
          const updatedContacts = [...contacts];
          updatedContacts[0] = formData;
          setContacts(updatedContacts);
          setIsEditing(false);
        },
      }
    );
  };

  return (
    <div className={classes["trip-contact"]}>
      <div className={classes["contact-info"]}>Dane kontaktowe:</div>
      {!isEditing ? (
        <div className={classes["contact-details"]}>
          {contacts.map((contact, index) => (
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
                <div
                  className={classes.email}
                >{`Email: ${contact.email1}`}</div>
              )}
              {contact.email2 && (
                <div
                  className={classes.email}
                >{`Email: ${contact.email2}`}</div>
              )}
              {contact.payment_instructions && (
                <div
                  className={classes["payment-instructions"]}
                >{`Instrukcje płatności: ${contact.payment_instructions}`}</div>
              )}
              {contact.additional_description && (
                <div
                  className={classes["additional-description"]}
                >{`Dodatkowe informacje: ${contact.additional_description}`}</div>
              )}
              {contact.payment_reference && (
                <div
                  className={classes["payment-reference"]}
                >{`Referencje płatności: ${contact.payment_reference}`}</div>
              )}
            </div>
          ))}
          <div className={classes["actions"]}>
            <button onClick={toggleEdit}>Edytuj</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={classes["contact-details"]}>
          <input
            type="text"
            name="phone1"
            value={formData.phone1 || ""}
            onChange={handleChange}
            placeholder="Telefon 1"
          />
          <input
            type="text"
            name="phone2"
            value={formData.phone2 || ""}
            onChange={handleChange}
            placeholder="Telefon 2"
          />
          <input
            type="text"
            name="phone3"
            value={formData.phone3 || ""}
            onChange={handleChange}
            placeholder="Telefon 3"
          />
          <input
            type="email"
            name="email1"
            value={formData.email1 || ""}
            onChange={handleChange}
            placeholder="Email 1"
          />
          <input
            type="email"
            name="email2"
            value={formData.email2 || ""}
            onChange={handleChange}
            placeholder="Email 2"
          />
          <textarea
            name="payment_instructions"
            value={formData.payment_instructions || ""}
            onChange={handleChange}
            placeholder="Instrukcje płatności"
          ></textarea>
          <textarea
            name="additional_description"
            value={formData.additional_description || ""}
            onChange={handleChange}
            placeholder="Dodatkowe informacje"
          ></textarea>
          <input
            type="text"
            name="payment_reference"
            value={formData.payment_reference || ""}
            onChange={handleChange}
            placeholder="Referencje płatności"
          />
          <div className={classes["actions"]}>
            <button type="submit">Zapisz</button>
            <button type="button" onClick={toggleEdit}>
              Anuluj
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactTrip;
