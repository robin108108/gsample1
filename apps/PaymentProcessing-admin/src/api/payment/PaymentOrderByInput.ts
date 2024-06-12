import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  gymId?: SortOrder;
  id?: SortOrder;
  paymentDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
