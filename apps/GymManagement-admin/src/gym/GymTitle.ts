import { Gym as TGym } from "../api/gym/Gym";

export const GYM_TITLE_FIELD = "name";

export const GymTitle = (record: TGym): string => {
  return record.name?.toString() || String(record.id);
};
