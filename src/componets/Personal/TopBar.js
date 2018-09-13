import React, {Component} from 'react';
import {Col, Container, Row} from "react-grid-system";
import {connect} from "react-redux";
import {actionCreators} from "../../store/duckStore";

const RowStyle = {width: '97%', height: '40px', background: '#ffffff', padding: '1%', position: 'fixed', zIndex: 99, };
const ColStyle = {width: '100%', height: '25px', paddingTop: '0.22%'};
const DivStyle = {color: '#535374',fontSize: '12px',paddingTop: '1%', cursor: 'pointer'};
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
                <Row justify="start" style={RowStyle} >
                       {/*==================================================
                            не смог сблизить Col & Col, а div & Col позицианируются на ура!!!
                      ===================================================================== */}
                    <div style={SvgStyle} onClick={this.toggleMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H8V8H4V4ZM10 10H14V14H10V10ZM14 4H10V8H14V4ZM16 4H20V8H16V4ZM8 10H4V14H8V10ZM16 10H20V14H16V10ZM8 16H4V20H8V16ZM10 16H14V20H10V16ZM20 16H16V20H20V16Z" fill="#6879BB"/>
                            </svg>
                     </div>
                     <Col sm={1} style={ColStyle} >
                        <div style={DivStyle} onClick={this.toggleMenu}><strong>Меню</strong></div>
                     </Col>
                 </Row>


        );
    }
}
const {show} = actionCreators
export default connect(null,{show})(TopBar);
