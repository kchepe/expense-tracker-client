import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
} from "@apollo/client";
import { authClient } from "../../lib/apolloClient";

const useQueryAuthClient = (
  query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
  options?: QueryHookOptions<unknown, OperationVariables>
) => {
  const clientQuery = useQuery(query, {
    client: authClient,
    ...options,
  });
  return clientQuery;
};

export default useQueryAuthClient;
