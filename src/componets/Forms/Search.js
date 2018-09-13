import React, {Component} from 'react';
import {Col, Container, Row} from "react-grid-system";
const customInput = {
        position: 'relative',
        height: '36px',
        outline: 'none',
        background: '#ffffff !important',
        minWidth: '100%',
        marginRight: '-15px',
        border: '1px',
        color: '#999999'
};
const SvgStyle = {
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'absolute',
    paddingRight: '15px',
    width: '3%',
    maxWidth: '3%',
    flex: '1 0 0px',
    marginLeft: '0%',
    marginRight: '3%',
    right: 'auto',
    left: 'auto',
    zIndex: '11',
    paddingTop: '22%'
};
const containerStyle = {
    borderRight: '1px solid #D6DCE9',
    borderLeft: '1px solid #D6DCE9',
    width: '50%'
}

class Search extends Component {

    render() {
        return (
            <Container fluid={true} style={containerStyle}>
                <Row>
                    <Col md={1}>
                        <div style={SvgStyle}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.951 15.7352C13.7917 16.7166 12.2921 17.3083 10.6542 17.3083C6.97919 17.3083 4 14.3292 4 10.6542C4 6.97919 6.97919 4 10.6542 4C14.3291 4 17.3083 6.97919 17.3083 10.6542C17.3083 12.2921 16.7166 13.7917 15.7352 14.951L16.3405 15.5562C16.6887 15.4396 17.0884 15.52 17.3658 15.7974L19.6752 18.1068C20.1083 18.5399 20.1083 19.2421 19.6752 19.6752C19.2421 20.1083 18.5399 20.1083 18.1068 19.6752L15.7974 17.3657C15.52 17.0884 15.4396 16.6887 15.5562 16.3404L14.951 15.7352ZM15.0903 10.6542C15.0903 13.1042 13.1042 15.0903 10.6542 15.0903C8.20416 15.0903 6.21808 13.1042 6.21808 10.6542C6.21808 8.20416 8.20416 6.21808 10.6542 6.21808C13.1042 6.21808 15.0903 8.20416 15.0903 10.6542Z" fill="#6879BB"/>
                                </g>
                            </svg>
                        </div>
                    </Col>

                    <Col md={10}>
                        <input type="text" style={customInput} placeholder={"Поиск по разделу"}/>
                    </Col>

                </Row>
            </Container>

        );
    }
}

export default Search;
