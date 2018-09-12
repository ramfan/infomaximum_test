import { createComponent } from 'react-fela'
import React from 'react'
const background = ({width, height, marginTop, background, top, left}) => ({
    position: "fixed",
    top: top,
    left: left,
    transform: 'translate(-50%, -50%)',
    background: background,
    height: height,
    marginTop: marginTop,
    width: width,
    paddingTop: '2%',
    minWidth: '400px'
});

export const Background = createComponent(background, 'div');
const spanColor = ({width, position, marginTop, marginLeft, marginRight}) => ({
     position: position,
    width: width,
    height: '36px',
    color: 'black',
    background: '#ffe254',
    fontSize: '12px',
    border: 0,
    borderRadius: '7px',
    marginTop: marginTop,
    marginLeft: marginLeft,
    marginRight: marginRight,

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