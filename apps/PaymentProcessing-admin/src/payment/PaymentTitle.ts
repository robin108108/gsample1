import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "gymId";

export const PaymentTitle = (record: TPayment): string => {
  return record.gymId?.toString() || String(record.id);
};
