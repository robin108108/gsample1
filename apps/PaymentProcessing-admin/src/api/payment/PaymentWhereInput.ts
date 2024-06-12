import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  gymId?: StringNullableFilter;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
