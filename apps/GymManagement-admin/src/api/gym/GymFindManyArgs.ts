import { GymWhereInput } from "./GymWhereInput";
import { GymOrderByInput } from "./GymOrderByInput";

export type GymFindManyArgs = {
  where?: GymWhereInput;
  orderBy?: Array<GymOrderByInput>;
  skip?: number;
  take?: number;
};
