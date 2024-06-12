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

export const GymServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="gym.id" reference="Gym" label="Gym">
          <SelectInput optionText={GymTitle} />
        </ReferenceInput>
        <TextInput
          label="serviceDescription"
          multiline
          source="serviceDescription"
        />
      </SimpleForm>
    </Create>
  );
};
