import { SortOrder } from "../../util/SortOrder";

export type GymOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  payments?: SortOrder;
  pricePerDay?: SortOrder;
  updatedAt?: SortOrder;
};
