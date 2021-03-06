import React, {Component} from 'react';
import {graphql} from 'react-apollo'
import {logginig} from "../../queries";
import {actionCreators} from "../../store/duckStore";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import { SubmissionError } from 'redux-form';
import Error from "../Forms/Error";

class Authorization extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log('PROPS',this.props);
        this.props.mutate({
            variables: {
                email: this.props.email,
                password: this.props.password
            }
        }).then(res =>{
            const {auth} = this.props;
             auth(res.data.login.token);
        }).catch(e => {
 this.props.errorReport('Ошибка сервера', true);
            return 'Network error';
           // console.log('ERROR', e)
        });




        if(this.props.isReady){
            return (<div>{ this.props.isReady && this.props.token.token !== null ? <Redirect to={`/user/${this.props.token}`} />: "Loading..."}</div>)
        }

        return(<div>Loading</div>)


    }

}
const queryOptions  = {
    options: props =>{
        return{ variables: {
                email: props.email,
                password: props.password
            },
        }
    }
};

Authorization = graphql(logginig, queryOptions)(Authorization);
const {auth, errorReport} = actionCreators
export default connect(state => ({
    token: state.getReducer.tokenHash,
    isReady: state.getReducer.isReady
}), {auth, errorReport})(Authorization);
