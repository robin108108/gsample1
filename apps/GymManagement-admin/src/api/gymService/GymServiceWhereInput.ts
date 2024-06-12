import { GymWhereUniqueInput } from "../gym/GymWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GymServiceWhereInput = {
  gym?: GymWhereUniqueInput;
  id?: StringFilter;
  serviceDescription?: StringNullableFilter;
};
