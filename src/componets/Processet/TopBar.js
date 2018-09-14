import React, {Component} from 'react';
import {Col, Container, Row} from "react-grid-system";
import {connect} from "react-redux";
import {actionCreators} from "../../store/duckStore";
import Search from "../Forms/Search";

const RowStyle = {width: '98%', height: '40px', background: '#ffffff', padding: '1%', position: 'fixed', zIndex: 99};
const ColStyle = {width: '100%', height: '25px', paddingTop: '0.22%'};
const DivStyle = {color: '#535374',fontSize: '12px',paddingTop: '1%',cursor: 'pointer'};
const SvgStyle = {
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '3%',
    maxWidth: '3%',
    flex: '1 0 0px',
    marginLeft: '0%',
    right: 'auto',
    left: 'auto',
    cursor: 'pointer'
};
const searchStyle = {
        boxSizing: 'border-box',
        minHeight: '1px',
        position: 'relative',
        paddingLeft: '15px',
        paddingRight: '15px',
        width: '100%',
        marginLeft: '17%',
        flex: '0 0 33.3333%',
        maxWidth: '33.3333%',
        right: 'auto',
        left: 'auto',

}

class TopBar extends Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        this.props.show(this.props.toggle);
    };

    render() {

        return (
            <Row style={RowStyle} >
                {/*==================================================
                            не смог сблизить Col & Col, а div & Col позицианируются на ура!!!
                      ===================================================================== */}
                <div style={SvgStyle} onClick={this.toggleMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H8V8H4V4ZM10 10H14V14H10V10ZM14 4H10V8H14V4ZM16 4H20V8H16V4ZM8 10H4V14H8V10ZM16 10H20V14H16V10ZM8 16H4V20H8V16ZM10 16H14V20H10V16ZM20 16H16V20H20V16Z" fill="#6879BB"/>
                    </svg>
                </div>
                <Col md={2} style={ColStyle} >
                    <div style={DivStyle} onClick={this.toggleMenu}><strong>Меню</strong></div>
                </Col>
                {
                    this.props.visible?
                        <Row >
                            <div style={SvgStyle}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7L15 4L11 1V3H7V12L8 11L9 12V5H11V7ZM7 21V17H5L8 13L11 17H9V19H15L14 20L15 21H7ZM21 21V23L17 20L21 17V19H23V12L24 13L25 12V21H21ZM16 3H25V7H27L24 11L21 7H23V5H16L17 4L16 3ZM20 10V9H12V10H20ZM20 12V13H12V12H20ZM20 16V15H12V16H20Z" fill="#6879BB"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>

                            </div>

                            <Col  md={9}>
                                <strong style={{color: '#6879BB', fontSize: '12px'}}>Список процессов</strong>
                            </Col>
                        </Row>: null

                    }
                {
                    this.props.search?
                        <div  style={searchStyle}>
                            <Search/>
                        </div>: null
                }



            </Row>


        );
    }
}
const {show} = actionCreators
export default connect(null,{show})(TopBar);
