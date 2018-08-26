import React, {Component} from 'react';
import Auth from "./Forms/Auth";
import Registration from "./Registration/Registration";
import {connect} from "react-redux";
class RegistryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(ev){
        this.setState({
            email: ev.email,
            password: ev.password
        })
    };
    render() {

        return(
            <div>
                <Auth onSubmit = {this.handleSubmit}/>

            </div>
        )

    }
}
App.defaultProps = {
    formData: {
        values: {
            email: '',
            password: ''
        }
    }
};

export default connect(state => {
    return{
        formData: state.form.AuthForm
    }})(RegistryComponent)