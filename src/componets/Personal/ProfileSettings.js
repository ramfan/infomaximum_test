import React, {Component} from 'react';
import EditPersonalData from "../Forms/EditPersonalData";
import {connect} from "react-redux";
import {withTheme} from "react-fela";
import {theme} from "../../theme";
import {Background} from "../RooStyle";



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
        const style = {
            width: this.props.theme.personalPage.width,
            height: this.props.theme.personalPage.height,
            backgroundColor: this.props.theme.personalPage.background
        };
        // console.log('PROOOPS', this.props)
         return (
            <div style={style}>

                <EditPersonalData onSubmit={this.handleSubmit} textVal={"Сохранить и вернуться"}/>
            </div>
        );
    }
}
ProfileSettings = withTheme(ProfileSettings);
export default connect(state => {
    return {
        token: state.Profile.token
    }
})(ProfileSettings);
