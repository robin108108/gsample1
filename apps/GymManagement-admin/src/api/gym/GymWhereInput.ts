import { GymEquipmentListRelationFilter } from "../gymEquipment/GymEquipmentListRelationFilter";
import { GymServiceListRelationFilter } from "../gymService/GymServiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GymWhereInput = {
  gymEquipments?: GymEquipmentListRelationFilter;
  gymServices?: GymServiceListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  payments?: JsonFilter;
  pricePerDay?: FloatNullableFilter;
};
