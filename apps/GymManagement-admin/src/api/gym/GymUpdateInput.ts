import { GymEquipmentUpdateManyWithoutGymsInput } from "./GymEquipmentUpdateManyWithoutGymsInput";
import { GymServiceUpdateManyWithoutGymsInput } from "./GymServiceUpdateManyWithoutGymsInput";
import { InputJsonValue } from "../../types";

export type GymUpdateInput = {
  gymEquipments?: GymEquipmentUpdateManyWithoutGymsInput;
  gymServices?: GymServiceUpdateManyWithoutGymsInput;
  location?: string | null;
  name?: string | null;
  payments?: InputJsonValue;
  pricePerDay?: number | null;
};
