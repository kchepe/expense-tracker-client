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

const url =
  "https://ec2-13-215-208-116.ap-southeast-1.compute.amazonaws.com:3000/graphql";

const session = async (): Promise<string> => {
  const userSession = await getSessionUtil();
  return userSession?.token ?? "";
};

const { getClient: getAuthApolloServer } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: from([errorLink, authLink(session()).concat(httpLink(url))]),
    })
);

export { getAuthApolloServer };
