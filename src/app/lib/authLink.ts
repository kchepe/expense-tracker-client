import { setContext } from '@apollo/client/link/context';

const authLink = (getToken: Promise<string>) => setContext(async (_, { headers }) => {
      const sessionToken = await getToken;
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${sessionToken}`,
        },
      };
    });

  export default authLink;
