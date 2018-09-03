import { createComponent } from 'react-fela'
import React from 'react'
const background = ({width, height, marginTop}) => ({
    position: "fixed",
    top: 50+'%',
    left: 50+'%',
    transform: 'translate(-50%, -50%)',
    background: '#ffffff',
    height: height,
    marginTop: marginTop,
    width: width + '%',
    paddingTop: '2%'
});

export const Background = createComponent(background, 'div');
const spanColor = ({width}) => ({
    // position: 'relative',
    width: width+'%',
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

const center = ({width, height, marginTop, display}) => ({
    position: 'relative',
    top: 50+'%',
    left: 50+'%',
    transform: 'translate(-50%, -50%)',
    height: height,
    marginTop: marginTop,
    width: width + '%',
    paddingTop: '2%',
    lineHeight:'25px',
    display: display
});

export const InCenter = createComponent(center, 'div');