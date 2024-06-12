import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="Gym ID" source="gymId" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
