import { Gym } from "../gym/Gym";
import { JsonValue } from "type-fest";

export type GymEquipment = {
  createdAt: Date;
  gym?: Gym | null;
  id: string;
  name: string | null;
  photo: JsonValue;
  updatedAt: Date;
};
