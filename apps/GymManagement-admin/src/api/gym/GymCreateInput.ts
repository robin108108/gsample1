import { GymEquipmentCreateNestedManyWithoutGymsInput } from "./GymEquipmentCreateNestedManyWithoutGymsInput";
import { GymServiceCreateNestedManyWithoutGymsInput } from "./GymServiceCreateNestedManyWithoutGymsInput";
import { InputJsonValue } from "../../types";

export type GymCreateInput = {
  gymEquipments?: GymEquipmentCreateNestedManyWithoutGymsInput;
  gymServices?: GymServiceCreateNestedManyWithoutGymsInput;
  location?: string | null;
  name?: string | null;
  payments?: InputJsonValue;
  pricePerDay?: number | null;
};
