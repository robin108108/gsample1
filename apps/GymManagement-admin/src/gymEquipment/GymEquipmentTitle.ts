import { GymEquipment as TGymEquipment } from "../api/gymEquipment/GymEquipment";

export const GYMEQUIPMENT_TITLE_FIELD = "name";

export const GymEquipmentTitle = (record: TGymEquipment): string => {
  return record.name?.toString() || String(record.id);
};
