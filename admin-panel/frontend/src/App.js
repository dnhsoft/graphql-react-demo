import React, {Component} from 'react';
import Dashboard from './Dashboard';
import {Admin, Resource} from 'react-admin';
import buildGraphcoolProvider from 'ra-data-graphcool';
import {CityList, CityEdit, CityCreate} from "./Components/Cities";
import {HotelList, HotelEdit, HotelCreate} from "./Components/Hotels";

import {LocationCity, Hotel} from '@material-ui/icons';

import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from "react-apollo";
import {InMemoryCache} from "apollo-cache-inmemory";

import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


import './App.css';


const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_SUBSCRIPTIONS_URL,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL
});


// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);


const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

class App extends Component {
  constructor() {
    super();
    this.state = {dataProvider: null};
  }

  componentDidMount() {
    buildGraphcoolProvider({clientOptions: {uri: process.env.REACT_APP_GRAPHQL_URL}})
      .then(dataProvider => this.setState({dataProvider}));
  }

  render() {
    const {dataProvider} = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <ApolloProvider client={client}>
      <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="City" list={CityList} edit={CityEdit} create={CityCreate} icon={LocationCity}/>
        <Resource name="Hotel" list={HotelList} edit={HotelEdit} create={HotelCreate} icon={Hotel}/>
      </Admin>
      </ApolloProvider>
    );
  }
}

export default App;
