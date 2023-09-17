import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { getSession } from "next-auth/react";
import httpLink from "./httpLink";
import errorLink from "./errorLink";
import authLink from "./authLink";
import { endpoint } from "../constant";


const session = async () => {
  const userSession = await getSession();
  return userSession?.user.token ?? "";
};

const graphqlClient = new ApolloClient({
  link: from([errorLink, httpLink(endpoint)]),
  cache: new InMemoryCache(),
});

const authClient = new ApolloClient({
  link: from([errorLink, authLink(session()).concat(httpLink(endpoint))]),
  cache: new InMemoryCache(),
});

export { graphqlClient, authClient };
