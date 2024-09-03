import { OptionalExcursions } from "../models/optionalExcursions";

type ModifyOptionalExcursionsInfo = {
  trip_id: number;
  excursions: { description: string }[];
};

export const modifyOptionalExcursions = async (
  info: ModifyOptionalExcursionsInfo
): Promise<void> => {
  await OptionalExcursions.destroy({
    where: { trip_id: info.trip_id },
  });

  for (const excursion of info.excursions) {
    await OptionalExcursions.create({
      trip_id: info.trip_id,
      description: excursion.description,
    } as OptionalExcursions);
  }
};
