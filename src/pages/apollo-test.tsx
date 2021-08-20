import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com",
  cache: new InMemoryCache(),

});