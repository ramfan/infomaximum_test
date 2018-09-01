import React, {Component} from 'react';
import {graphql} from 'react-apollo'
import {logginig} from "../../queries";
import {auth} from "../../Action-Creators/AC";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import { SubmissionError } from 'redux-form';

class Authorization extends Component {
    constructor(props){
        super(props)
    }

    render() {
        this.props.mutate({
            variables: {
                email: this.props.email,
                password: this.props.password
            }
        }).then(res =>{
            const {auth} = this.props;
            auth(res.data.login.token);
        }).catch(e => {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!'
            })
        });




        if(this.props.isReady){
            return (<div>{this.props.token.token !== null ? <Redirect to={`/user/${this.props.token.token}`} />: "Loading"}</div>)
        }

        return(<div>Loading</div>)


    }

}
const queryOptions  = {
    options: props =>{
        return{ variables: {
                email: props.email,
                password: props.password
            }
        }
    }
};

Authorization = graphql(logginig, queryOptions)(Authorization);

export default connect(state => ({
    token: state.auth.tokenHash,
    isReady: state.auth.isReady
}), {auth})(Authorization);
