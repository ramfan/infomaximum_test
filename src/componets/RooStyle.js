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
    height: '36px',
    color: 'black',
    background: '#ffe254',
    fontSize: '12px',
    border: 0,
    borderRadius: '7px',
    marginTop: '8%',
    marginLeft: '10%',
    marginRight: '10%',

});
export const ButtonStyle = createComponent(spanColor, 'button');
 const ShowHide = () => ({
    width: '10px',
    height: '10px',
    float: 'right',
    marginTop: '12px',
    marginLeft: '86%',
    position: 'absolute',
    display: 'flex',
});
export const CustomRadio = createComponent(ShowHide, 'span');