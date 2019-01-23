import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  NumberField,
  SimpleForm,
  TextInput,
  DisabledInput,
  NumberInput,
  Filter,
  ReferenceField,
  SelectInput,
  ReferenceInput,
} from 'react-admin';
import {isRequired} from "../Validations";

const validateRequired = [isRequired];

const HotelFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name_contains"/>
    <TextInput label="City name" source="city.name_contains"/>
    {/* <NumberInput label="Stars greater" source="numberOfStars_gte"/> */}
    {/* <NumberInput label="Stars less" source="numberOfStars_lte"/> */}
  </Filter>
);

export const HotelList = props => (
  <List {...props} filters={<HotelFilter/>}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="name"/>
      <NumberField source="numberOfStars"/>      
      <ReferenceField label="City" reference="City" source="city.id">
        <TextField source="name"/>
      </ReferenceField> 
    </Datagrid>
  </List>
);


export const HotelEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <DisabledInput source="id"/>
      <TextInput source="name" validate={validateRequired}/>
      <NumberInput source="numberOfStars" validate={validateRequired}/>
      <ReferenceInput label="City" reference="City" source="city.id" validate={validateRequired}>
        <SelectInput optionText="name"/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
 

export const HotelCreate = props => (
  <Create {...props} redirect="list">
    <SimpleForm redirect="list">
      <DisabledInput source="id"/>
      <TextInput source="name" validate={validateRequired}/>
      <NumberInput source="numberOfStars" validate={validateRequired}/>
      <ReferenceInput label="City" reference="City" source="city.id" validate={validateRequired}>
        <SelectInput optionText="name"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
