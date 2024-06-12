import { GymWhereUniqueInput } from "../gym/GymWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type GymEquipmentUpdateInput = {
  gym?: GymWhereUniqueInput | null;
  name?: string | null;
  photo?: InputJsonValue;
};
