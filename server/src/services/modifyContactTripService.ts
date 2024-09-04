import { TripContacts } from "../models/tripContacts";

type ContactInfo = {
  phone1?: string;
  phone2?: string;
  phone3?: string;
  email1?: string;
  email2?: string;
  payment_instructions?: string;
  additional_description?: string;
  payment_reference?: string;
};

export const updateContactTrip = async (
  trip_id: number,
  contactInfo: ContactInfo
): Promise<void> => {
  const existingContact = await TripContacts.findOne({
    where: { trip_id },
  });

  if (!existingContact) {
    throw new Error("No contact found for this trip.");
  }

  await existingContact.update(contactInfo);
};
