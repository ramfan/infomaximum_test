import React, {Component} from 'react';
import {  graphql } from 'react-apollo';
import {personalData} from "../../queries";


class PersonalPage extends Component {

    render() {

       const { data } = this.props;
       console.log("DATA", data)
        if (data.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <img src={data.User.avatar}/>
                <h2>{data.User.lastName} {data.User.firstName}</h2>
            </div>
        );
    }
}
const queryOptions  = {
    options: props =>{
            return {
                variables: {
                    token: props.match.params.token
                }
        }
    }
};
PersonalPage = graphql(personalData, queryOptions)(PersonalPage);
export default PersonalPage;
