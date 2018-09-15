import React, {Component} from 'react';
import {  graphql } from 'react-apollo';
import {Redirect} from "react-router-dom";
import {actionCreators} from "../../store/duckStore";
import {connect} from "react-redux";
import {register as query} from "../../queries";

class Registration extends Component {
componentWillMount(){
    this.props.mutate({
        variables: {
            email: this.props.email,
            password: this.props.password
        }
    }).then(res =>{
        const {auth} = this.props;
        auth(res.data.register.token);
    }).catch(e => {
            this.props.errorReport('Ошибка сервера')

            return 'Network Error'}
        );

}

    render() {
    if(this.props.isReady){
        return (<div>{this.props.token.token !== null ? <Redirect to={`/`} />: "Loading"}</div>)
    }

    return(<div>Loading</div>)


    }
}
const queryOption = {
    options: props => {
        return {
            variables: {
                password:  props.password,
                email: props.email
            },
        }
    },
};


Registration = graphql(query, queryOption)(Registration);
const {auth, errorReport} = actionCreators;
export default connect(state => ({
    token: state.getReducer.tokenHash,
    isReady: state.getReducer.isReady
}), {auth, errorReport})(Registration);

