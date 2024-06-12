import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { GymEquipmentTitle } from "../gymEquipment/GymEquipmentTitle";
import { GymServiceTitle } from "../gymService/GymServiceTitle";

export const GymEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
