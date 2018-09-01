import React, {Component} from 'react';
import {  graphql } from 'react-apollo';
import {personalData} from "../../queries";
import {connect} from "react-redux";
import {Profile} from "../../Action-Creators/AC";
import {Link} from "react-router-dom";


class PersonalPage extends Component {

    render() {

       const { data, Profile } = this.props;

        if (data.loading) {
            return <div>Loading...</div>
        }
        Profile(this.props);
        return (
            <div>
                <img src={data.User.avatar}/>
                <h2>{data.User.lastName} {data.User.firstName}</h2>
                <Link to={`/editProfile`}>
                    <button>Edit</button>
                </Link>
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
export default connect(null, {Profile})(PersonalPage);
