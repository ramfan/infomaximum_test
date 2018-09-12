import React, {Component} from 'react';
import Error from "../Forms/Error";
import {graphql} from "react-apollo/index";
import {personalData, updateUserData} from "../../queries";

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag: this.props.flag
        };
        this.abort = this.abort.bind(this)
    }
    render() {
        {
            this.state.flag ?

                this.props.mutate({
                    variables: {
                        id: this.props.id,
                        firstName: this.props.firstName,
                        lastName: this.props.lastName

                    }, refetchQueries: [{query: personalData, variables:{id: this.props.id}}]
                }).then(res => {
                    console.log(res)
                    this.abort(res);
                }).catch(e => {return e}) : null

        }
        return <div></div>
    }

    abort(res) {
        this.setState({
            flag: false
        });
    }
}
Edit = graphql(updateUserData)(Edit);
export default Edit;
