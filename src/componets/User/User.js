import React, {Component} from 'react';
import {gql} from "apollo-boost";
import {graphql} from "graphql";
// const query = gql`
// query UseR($id: !ID){
//     User{id: $id){
//       firstName
//       lastName
//       email
//     }
// }
// `;
class User extends Component {



    render() {

        return (
            <div>savsd</div>

        );
    }
}
// const queryOption = {
//     options: props => ({
//          id: props.match.params.id
//     })
// };
//  User = graphql(query, queryOption)(User);
export default User;
