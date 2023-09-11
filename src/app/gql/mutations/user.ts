import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation CreateUser($newUser: SignupInput!) {
    signup(newUser: $newUser) {
      success
      message
      data {
        id
        email
        password
      }
    }
  }
`;

const LOG_IN = `mutation Login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
      token
      user {
          id
          firstName
          lastName
          email
      }
  }
}`;

export { ADD_USER, LOG_IN };
