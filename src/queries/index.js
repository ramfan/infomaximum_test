import gql from "graphql-tag";

export const register = gql`mutation registration($email: String!, $password: String!){
  register(email: $email, password: $password, expiresIn: "24h") {
    token
  }
}`;

export const logginig = gql`mutation logginig($email: String!, $password: String!){
  login(email: $email, password: $password) {
    token
  }
}`;
export const personalData = gql`query Person($token: ID!){
User(id: $token){
firstName
lastName
avatar
}
}`;