import { useState } from "react";
import classes from "./ContactTrip.module.scss";
import { useModifyContactTrip } from "../../hooks/useModifyContactTrip";
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
  const [contacts, setContacts] = useState<Contact[]>(tripContacts);
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
      {!isEditing ? (
        <>
          <div className={classes["contact-info"]}>Dane kontaktowe:</div>
          <div className={classes["contact-details"]}>
            {contacts.map((contact, index) => (
              <div key={index}>
                {contact.phone1 && (
                  <div className={classes.phone}>
                    <span className={classes.label}>Telefon 1:</span>
                    <span>{contact.phone1}</span>
                  </div>
                )}
                {contact.phone2 && (
                  <div className={classes.phone}>
                    <span className={classes.label}>Telefon 2:</span>
                    <span>{contact.phone2}</span>
                  </div>
                )}
                {contact.phone3 && (
                  <div className={classes.phone}>
                    <span className={classes.label}>Telefon 3:</span>
                    <span>{contact.phone3}</span>
                  </div>
                )}
                {contact.email1 && (
                  <div className={classes.email}>
                    <span className={classes.label}>Email 1:</span>
                    <span>{contact.email1}</span>
                  </div>
                )}
                {contact.email2 && (
                  <div className={classes.email}>
                    <span className={classes.label}>Email 2:</span>
                    <span>{contact.email2}</span>
                  </div>
                )}
                {contact.payment_instructions && (
                  <div className={classes["payment-instructions"]}>
                    <span className={classes.label}>Instrukcje płatności:</span>
                    <div>{contact.payment_instructions}</div>
                  </div>
                )}
                {contact.additional_description && (
                  <div className={classes["additional-description"]}>
                    <span className={classes.label}>Dodatkowe informacje:</span>
                    <div>{contact.additional_description}</div>
                  </div>
                )}
                {contact.payment_reference && (
                  <div className={classes["payment-reference"]}>
                    <span className={classes.label}>Referencje płatności:</span>
                    <span>{contact.payment_reference}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={classes["actions"]}>
            <button onClick={toggleEdit}>Edytuj</button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={classes["form-field"]}>
            <label htmlFor="phone1">Telefon 1:</label>
            <input
              type="text"
              name="phone1"
              value={formData.phone1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={classes["form-field"]}>
            <label htmlFor="phone2">Telefon 2:</label>
            <input
              type="text"
              name="phone2"
              value={formData.phone2 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={classes["form-field"]}>
            <label htmlFor="phone3">Telefon 3:</label>
            <input
              type="text"
              name="phone3"
              value={formData.phone3 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={classes["form-field"]}>
            <label htmlFor="email1">Email 1:</label>
            <input
              type="email"
              name="email1"
              value={formData.email1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={classes["form-field"]}>
            <label htmlFor="email2">Email 2:</label>
            <input
              type="email"
              name="email2"
              value={formData.email2 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={classes["form-field"]}>
            <label htmlFor="payment_instructions">Instrukcje płatności:</label>
            <textarea
              name="payment_instructions"
              value={formData.payment_instructions || ""}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={classes["form-field"]}>
            <label htmlFor="additional_description">
              Dodatkowe informacje:
            </label>
            <textarea
              name="additional_description"
              value={formData.additional_description || ""}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={classes["form-field"]}>
            <label htmlFor="payment_reference">Referencje płatności:</label>
            <input
              type="text"
              name="payment_reference"
              value={formData.payment_reference || ""}
              onChange={handleChange}
            />
          </div>
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
