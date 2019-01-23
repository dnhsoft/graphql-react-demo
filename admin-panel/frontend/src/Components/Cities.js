import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  DisabledInput,
  Filter,
  // ReferenceField,
  // SelectInput,
  // ReferenceInput,
} from 'react-admin';
import {isRequired} from "../Validations";

const validateRequired = [isRequired];

const CityFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name_contains"/>
  </Filter>
);

export const CityList = props => (
  <List {...props} filters={<CityFilter/>}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="name"/>
      {/* <ReferenceField label="Country" reference="Country" source="country.id">
        <TextField source="name"/>
      </ReferenceField> */}
    </Datagrid>
  </List>
);



export const CityEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <DisabledInput source="id"/>
      <TextInput source="name" validate={validateRequired}/>
      {/* <ReferenceInput label="Country" reference="Country" source="country.id" validate={validateRequired}>
        <SelectInput optionText="name"/>
      </ReferenceInput> */}
    </SimpleForm>
  </Edit>
);

export const CityCreate = props => (
  <Create {...props} redirect="list">
    <SimpleForm redirect="list">
      <DisabledInput source="id"/>
      <TextInput source="name" validate={validateRequired}/>
      {/* <ReferenceInput label="Country" reference="Country" source="country.id" validate={validateRequired}>
        <SelectInput optionText="name"/>
      </ReferenceInput> */}
    </SimpleForm>
  </Create>
)
