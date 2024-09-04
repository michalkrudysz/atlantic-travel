import { TripContacts } from "../models/tripContacts";
import { Optional } from "sequelize/types";

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

  if (existingContact) {
    await existingContact.update(contactInfo);
  } else {
    await TripContacts.create({
      trip_id,
      ...(contactInfo as Optional<TripContacts, keyof TripContacts>),
    });
  }
};
