import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="Gym ID" source="gymId" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
