import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { Subscription } from 'react-apollo';
import gql from "graphql-tag";


const HOTELS_SUBSCRIPTION = gql`
  subscription createdHotel {
    Hotel(filter: {mutation_in: [CREATED]}) {
      mutation
      node {
        name
      }
    }
  }
`;


class Dashboard extends React.Component {
  render() {
    return (
      <Card>
        <Title title="Hotel listener" />
        <CardContent>
<Subscription subscription={HOTELS_SUBSCRIPTION}>
  { ({data}) => {
    return <b>{!data ? 'waiting...' : ('Hotel "' + data.Hotel.node.name + '" was created') }</b>;
  } }
</Subscription>
        </CardContent>
      </Card>
    );
  }
}
export default Dashboard;