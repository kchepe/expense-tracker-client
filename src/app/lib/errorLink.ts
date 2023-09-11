/* eslint-disable no-console */
/* eslint-disable no-alert */
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map((error) => {
      console.log(error.message);
      return error.message;
    });
  }

  if (networkError) {
    if (typeof window !== 'undefined' && !window.navigator.onLine) {
      alert('Sorry, your browser is offline.');
    } else {
      console.log('Some other network error occurred.');
    }
  }
});

export default errorLink;
