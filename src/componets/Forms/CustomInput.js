import React from 'react';


function CustomInput(props) {
    console.log("CUSTOM_INPUT", props);
    const style = {
        textAlign: props.theme.textAlign,
        position: props.theme.position,
        width: props.theme.width,
        height: props.theme.height,
        outline: props.theme.outline,
        borderColor: props.touched ? props.error ? '#fc0202': '#ffffff' : '#ffffff',
        border: '1px solid #c9cff2',
        borderRadius: '5px',
        marginLeft: props.theme.marginLeft,
        marginRight: props.theme.marginRight,
    };
    return (
        <div>
            <input {...props} placeholder={props.label} style={style}/>
        </div>
    );
}


export default CustomInput;
