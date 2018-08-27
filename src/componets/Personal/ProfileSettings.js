import React, {Component} from 'react';
import EditPersonalData from "../Forms/EditPersonalData";

class ProfileSettings extends Component {
constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        email: ''
    };
    this.handleSubmit = this.props.bind(this);
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

export default ProfileSettings;
