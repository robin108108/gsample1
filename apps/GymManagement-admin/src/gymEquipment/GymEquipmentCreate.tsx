import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GymTitle } from "../gym/GymTitle";

export const GymEquipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="gym.id" reference="Gym" label="Gym">
          <SelectInput optionText={GymTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
