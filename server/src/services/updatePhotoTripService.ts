import { TripImages } from "../models/tripImages";

interface UpdatePhotoInfo {
  trip_id: number;
  image_url: string;
  description: string;
}

export const updatePhotoTrip = async (
  info: UpdatePhotoInfo
): Promise<TripImages> => {
  const photo = await TripImages.findOne({
    where: {
      trip_id: info.trip_id,
    },
  });

  if (!photo) {
    throw new Error("Photo not found for the given trip ID.");
  }

  photo.image_url = info.image_url;
  photo.description = info.description;

  await photo.save();
  return photo;
};
