import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from "apollo-cache-inmemory";

const link = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});
export default client;