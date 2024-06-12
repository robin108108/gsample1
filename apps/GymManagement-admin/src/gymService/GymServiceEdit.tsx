import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GymTitle } from "../gym/GymTitle";

export const GymServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
