import {InCenter} from "../RooStyle";
import CustomInput from "./CustomInput";
import React from "react";

export const renderField = ({ input, label, type, meta: { touched, error, warning }}) => {
    console.log('ERROR', error);
    return (
        <div>
            <CustomInput {...input} label={label} touched={touched} error={error} type={type} isAuth={true}/>
        </div>
    )
};

export const renderEditField = ({ input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <div style={{position: 'absolute'}}>
            <label style={{fontSize: '14px',color: '#999999', display: 'inline', marginTop: '1%'}}>&nbsp;&nbsp;&nbsp;{label}</label>

        </div>
        <InCenter  width={70} height={34+'px'} marginTop={'-10px'} display={'inline'}>
            <CustomInput  {...input} label={label} touched={touched} error={error} type={type} />
        </InCenter>
    </div>
);