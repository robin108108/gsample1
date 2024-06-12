import { GymService as TGymService } from "../api/gymService/GymService";

export const GYMSERVICE_TITLE_FIELD = "id";

export const GymServiceTitle = (record: TGymService): string => {
  return record.id?.toString() || String(record.id);
};
