import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { GymEquipmentTitle } from "../gymEquipment/GymEquipmentTitle";
import { GymServiceTitle } from "../gymService/GymServiceTitle";

export const GymCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="gymEquipments"
          reference="GymEquipment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GymEquipmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="gymServices"
          reference="GymService"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GymServiceTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <div />
        <NumberInput label="pricePerDay" source="pricePerDay" />
      </SimpleForm>
    </Create>
  );
};
