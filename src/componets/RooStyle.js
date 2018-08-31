import { createComponent } from 'react-fela'
import React from 'react'
const background = () => ({
    position: "fixed",
    top: 0+'%',
    left: 50+'%',
    transform: 'translate(-50%, -50%)',
    background: '#ffffff',
    height: '100%',
    marginTop: '30%',
    width: '30%',
    paddingTop: '2%'
});

export const Background = createComponent(background, 'div');
const spanColor = () => ({
    // position: 'relative',
    width: '80%',
    height: '30px',
    color: 'black',
    background: '#ffe254',
    fontSize: '16px',
    border: 0,
    borderRadius: '7px',
    marginTop: '8%',
    marginLeft: '10%',
    marginRight: '10%',

});
export const ButtonStyle = createComponent(spanColor, 'button');
const field = (props) => ({
    position: props.theme.position,
    width: props.theme.width,
    height: props.theme.height,
    outline: props.theme.outline
 });
export function CustomField (props){
    console.log(props);
    return (field)
};