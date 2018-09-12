import React, {Component} from 'react';
import Error from "../Forms/Error";
import {graphql} from "react-apollo/index";
import {personalData, updateUserData} from "../../queries";

class Edit extends Component {
    render() {

       // const { firstName, lastName, email, id} = this.props

        this.props.mutate({
            variables: {
                id: this.props.id,
                firstName: this.props.firstName,

            }
        }).then(res =>{
            console.log("SUCCSES", res);
            return res
        }).finally(e => {
            return e
        });
        return <div></div>
    }
}
Edit = graphql(updateUserData)(Edit);
export default Edit;
