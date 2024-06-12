import { GymWhereUniqueInput } from "../gym/GymWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GymEquipmentWhereInput = {
  gym?: GymWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  photo?: JsonFilter;
};
