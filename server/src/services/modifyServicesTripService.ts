import { Services } from "../models/services";

type ModifyServicesInfo = {
  trip_id: number;
  services: { description: string }[];
};

export const modifyServices = async (
  info: ModifyServicesInfo
): Promise<void> => {
  await Services.destroy({
    where: { trip_id: info.trip_id },
  });

  for (const service of info.services) {
    await Services.create({
      trip_id: info.trip_id,
      description: service.description,
    } as Services);
  }
};
