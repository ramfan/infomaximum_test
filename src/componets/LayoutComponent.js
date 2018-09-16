import React, {Component} from 'react';
import {Col, Container, Row} from "react-grid-system";
import {withTheme} from "react-fela";


class LayoutComponent extends Component {

    render() {
        const style = {
            width: this.props.theme.personalPage.width,
            height: this.props.theme.personalPage.height,
            backgroundColor: this.props.theme.personalPage.background,
            minHeight: this.props.theme.personalPage.minHeight,
            minWidth: '1030px !important'
        };
        return (
           <Container fluid={true} style={style}>
               <Row >
                   {this.props.top}
               </Row>
               <Row>
                   <Col md={2} >
                       {this.props.left}
                   </Col>
                   <Col md={10}>
                       {this.props.content}
                   </Col>
               </Row>
           </Container>
        );
    }
}
export default withTheme(LayoutComponent)