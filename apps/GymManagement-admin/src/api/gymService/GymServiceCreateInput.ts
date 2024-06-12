import { GymWhereUniqueInput } from "../gym/GymWhereUniqueInput";

export type GymServiceCreateInput = {
  gym?: GymWhereUniqueInput | null;
  serviceDescription?: string | null;
};
