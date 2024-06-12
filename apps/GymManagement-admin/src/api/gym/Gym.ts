import { GymEquipment } from "../gymEquipment/GymEquipment";
import { GymService } from "../gymService/GymService";
import { JsonValue } from "type-fest";

export type Gym = {
  createdAt: Date;
  gymEquipments?: Array<GymEquipment>;
  gymServices?: Array<GymService>;
  id: string;
  location: string | null;
  name: string | null;
  payments: JsonValue;
  pricePerDay: number | null;
  updatedAt: Date;
};
