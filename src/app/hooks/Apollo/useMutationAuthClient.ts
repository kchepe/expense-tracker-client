import {
  DocumentNode,
  MutationHookOptions,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
} from "@apollo/client";
import { authClient } from "../../lib/apolloClient";

const useMutationAuthClient = (
  query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
  options?: MutationHookOptions<any, any>
) => {
  const [mutation, { loading, data }] = useMutation(query, {
    client: authClient,
    ...options,
  });
  return { mutation, loading, data };
};

export default useMutationAuthClient;
