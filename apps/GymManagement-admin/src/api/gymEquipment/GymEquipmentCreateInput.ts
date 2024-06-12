import { GymWhereUniqueInput } from "../gym/GymWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type GymEquipmentCreateInput = {
  gym?: GymWhereUniqueInput | null;
  name?: string | null;
  photo?: InputJsonValue;
};
