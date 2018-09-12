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
export const personalData = gql`query Person($id: ID!){
    User(id: $id){
        firstName
        lastName
        email
        avatar
    }
}`;
export const updateUserData = gql`
    mutation updateUserData($id: ID!, $firstName: String!, $lastName: String!){
  updateUser(id: $id, firstName: $firstName, lastName: $lastName) {
    id
    firstName
    lastName
  }
}
`