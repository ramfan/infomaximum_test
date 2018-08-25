import React, {Component} from 'react';
import Auth from "./Forms/Auth";
import { Link } from 'react-router-dom';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Main from "./main/Main";
import {connect} from "react-redux";


const query = gql`mutation {
  register(email: "hi@jamiebarton.co.uk", password: "F4K3rqL!", expiresIn: '24h') {
    token
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

        const users = data.allUsers.map(user =>
          <Link to={`/user/${user.id}/`}>
                <li key={user.id}>{user.email} </li>
           </Link>

        );

        return(
        <div>
            <Auth/>
            <ul>
                {users}
            </ul>
        </div>
        )

    }
}
queryOption =
App =  graphql(query)(App);
export default connect(state => console.log('______++++++_____',state.form.AuthForm))(App)