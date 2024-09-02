import { IncludedExcursions } from "../models/includedExcursions";

type ModifyExcursionsInfo = {
  trip_id: number;
  excursions: { description: string }[];
};

export const modifyExcursions = async (
  info: ModifyExcursionsInfo
): Promise<void> => {
  await IncludedExcursions.destroy({
    where: { trip_id: info.trip_id },
  });

  for (const excursion of info.excursions) {
    await IncludedExcursions.create({
      trip_id: info.trip_id,
      description: excursion.description,
    } as IncludedExcursions);
  }
};
