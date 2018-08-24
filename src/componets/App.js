import React, {Component} from 'react';
import Auth from "./Forms/Auth";
import { Link } from 'react-router-dom';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Main from "./main/Main";


const query = gql`{
allUsers(count: 10){
  id
  firstName
  lastName
  email
}

}`;
class App extends Component {
state = {
    selected: null
};
    render() {
        let { data } = this.props;

        if (data.loading) {
            return <div>Loading...</div>
        }

        const user = data.allUsers.map(user =>
          <Link to={`/user/${user.id}/`}>
                <li key={user.id}>{user.email} </li>
           </Link>

        );

        return(
        <div>
            <Auth/>
        </div>
        )

    }
}
export default graphql(query)(App);