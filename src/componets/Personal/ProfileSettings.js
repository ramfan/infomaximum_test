import React, {Component} from 'react';
import EditPersonalData from "../Forms/EditPersonalData";
import {connect} from "react-redux";

class ProfileSettings extends Component {
constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(ev){
    this.setState({
        firstName: ev.firstName,
        lastName: ev.lastName,
        email: ev.email
    });
}
    render() {
        return (
            <div>
                <EditPersonalData onSubmit={this.handleSubmit}/>
                
            </div>
        );
    }
}

export default connect(state => {
    console.log("SETTING PROPS", state.Profile)
    return {
        token: state.Profile.token
    }
})(ProfileSettings);
