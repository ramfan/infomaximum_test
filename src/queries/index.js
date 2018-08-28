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
        email
        avatar
    }
}`;
export const updateUserData = gql`
    mutation updateUserData($token: String!, $firstName: String!, $lastName: String!, $email: String!){
  updateUser(id: "wk0z1j1tzj7xc0116is3ckdrx", firstName: "Jim") {
    id
    firstName
    lastName
  }
}
`