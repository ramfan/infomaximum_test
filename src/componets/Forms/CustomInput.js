import React, {Component} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Show  from '../../assets/show-hide-password.svg'
import {CustomRadio} from "../RooStyle";
import {withTheme} from "react-fela";
import {connect} from "react-redux";
import {actionCreators} from "../../store/duckStore";

class CustomInput extends Component{
constructor(props){
    super(props);
    this.state = {
        hide: true
    };
    this.handleChangeType = this.handleChangeType.bind(this);
}


render(){
    const {theme,touched, error, type, errorReport} = this.props;
    console.log("PROOOOOPS", actionCreators)
        touched && error ? errorReport(error) : errorReport(null);
    const style = {
      //  textAlign: theme.customInput.textAlign,
        position: theme.customInput.position,
        width: theme.customInput.width,
        height: theme.customInput.height,
        outline: theme.customInput.outline,
        borderColor: touched ? error ? '#fc0202': '#c9cff2' : '#c9cff2',
        border: '1px solid #c9cff2',
        borderRadius: '5px',
        marginLeft: theme.customInput.marginLeft,
        marginRight: theme.customInput.marginRight,
        color: '#6879BB',
        paddingLeft: '1%',
    };
    const showHide = {
        width: '10px',
        height: '10px',
        float: 'right',
        marginTop: '18px',
        marginLeft: '86%',
        position: 'absolute',
        display: 'flex',
        cursor: type === 'password'? 'pointer':''
    };
    return (
        <div style={{display: 'flex'}}>
            <input {...this.props} type={this.props.isAuth ? (this.props.type !== "email"?this.state.hide ? "password": "text":''): 'text'} placeholder={this.props.label} style={style}/>
            {
                type === "password"?

                    <span style={showHide} onClick={this.handleChangeType}>
                        <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.334437 3.03842L-2.94905e-05 2.34619L1.36085 1.66147C0.653818 0.953779 0.167203 0.384615 0.167203 0.384615C0.167203 0.384615 0.296409 0.238462 0.50928 0C1.72411 1 3.6923 3 5.99999 3V5H5.53845V4C4.8793 3.94225 4.19767 3.93953 3.65683 3.55394L2.71413 4.50008L2.1818 3.96146L3.01815 3.11542L1.85494 2.26919L0.334437 3.03842Z" fill="#6879BB"/>
                            <path d="M11.6655 3.03842L12 2.34619L10.6391 1.66147C11.3462 0.953779 11.8328 0.384615 11.8328 0.384615C11.8328 0.384615 11.7036 0.238462 11.4907 0C10.2759 1 8.30767 3 5.99999 3V5H6.46152V4C7.12067 3.94225 7.8023 3.93953 8.34314 3.55394L9.28584 4.50008L9.81817 3.96146L8.98182 3.11542L10.145 2.26919L11.6655 3.03842Z" fill="#6879BB"/>
                        </svg>

                    </span>
                   :
                    type === "text"
            }
        </div>

    );
}
    handleChangeType(){
        this.setState({
            hide: !this.state.hide
        });
    }
}
const {errorReport} = actionCreators
CustomInput = connect(null, {errorReport})(CustomInput)

export default withTheme(CustomInput);
