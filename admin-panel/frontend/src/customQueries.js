import gql from "graphql-tag";

export const GET_MATERIALS = gql`
    {
        allMaterials{
            calorieValueTotal, calorieValueTransfer, id, moisture, name, price, nutrients
        }
    }
`;

export const GET_UNITS = gql`
    {
        allUnits{
            id, name
        }
    }
`;

export const GET_NUTRIENT_NAME = gql`
    query getNutrientName($id: ID){
        allNutrients(filter:{
            id:$id
        }){
            name
        }
    }
`;