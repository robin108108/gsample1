import { SortOrder } from "../../util/SortOrder";

export type GymServiceOrderByInput = {
  createdAt?: SortOrder;
  gymId?: SortOrder;
  id?: SortOrder;
  serviceDescription?: SortOrder;
  updatedAt?: SortOrder;
};
