import { GymWhereUniqueInput } from "../gym/GymWhereUniqueInput";

export type GymServiceUpdateInput = {
  gym?: GymWhereUniqueInput | null;
  serviceDescription?: string | null;
};
