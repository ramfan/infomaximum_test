import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
query Main($id: ID!){
User(id: $id){
  firstName
  lastName
  email
}

}`;

class Main extends Component {
    render() {
        const {data} = this.props;
        console.log('DATA IN USER', this.props);

        if (data.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <p>{data.User.firstName}</p>
                <p>{data.User.lastName}</p>
                <p>{data.User.email}</p>
            </div>
        );

    }
}
const queryOption = {
    options: props => {
               return {
            variables: {
                id:  props.match.params.id,
            },
        }
    },
};
Main = graphql(query, queryOption)(Main);

export default Main;

