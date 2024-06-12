import { GymServiceWhereInput } from "./GymServiceWhereInput";
import { GymServiceOrderByInput } from "./GymServiceOrderByInput";

export type GymServiceFindManyArgs = {
  where?: GymServiceWhereInput;
  orderBy?: Array<GymServiceOrderByInput>;
  skip?: number;
  take?: number;
};
