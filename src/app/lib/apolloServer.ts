import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { from } from "@apollo/client";
import errorLink from "./errorLink";
import httpLink from "./httpLink";
import getSessionUtil from "../utils/getSession.util";
import authLink from "./authLink";
import { endpoint } from "../constant";

const session = async (): Promise<string> => {
  const userSession = await getSessionUtil();
  return userSession?.token ?? "";
};

const { getClient: getAuthApolloServer } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: from([errorLink, authLink(session()).concat(httpLink(endpoint))]),
    })
);

export { getAuthApolloServer };
