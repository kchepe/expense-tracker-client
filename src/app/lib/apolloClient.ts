import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { getSession } from "next-auth/react";
import httpLink from "./httpLink";
import errorLink from "./errorLink";
import authLink from "./authLink";

const url =
  "https://ec2-13-215-208-116.ap-southeast-1.compute.amazonaws.com:3000/graphql";

const session = async () => {
  const userSession = await getSession();
  return userSession?.user.token ?? "";
};

const graphqlClient = new ApolloClient({
  link: from([errorLink, httpLink(url)]),
  cache: new InMemoryCache(),
});

const authClient = new ApolloClient({
  link: from([errorLink, authLink(session()).concat(httpLink(url))]),
  cache: new InMemoryCache(),
});

export { graphqlClient, authClient };
