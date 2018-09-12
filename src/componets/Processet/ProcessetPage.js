import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withTheme} from "react-fela";
import ProcessCard from "./ProcessCard";

class ProcessetPage extends Component {

    render() {
        const style = {
            width: this.props.theme.personalPage.width,
            height: this.props.theme.personalPage.height,
            backgroundColor: this.props.theme.personalPage.background,

        };
       // console.log("PROCESSE", this.props);
        let elements = this.props.processet.map(element => <div key={element.id}><ProcessCard data={element}/></div>)
        return (
            <div style={style}>
                <div style={{padding: '5%'}}>
                    {

                        elements
                    }
                </div>

            </div>
        );

    }
}
ProcessetPage = withTheme(ProcessetPage);
export default connect(state => {
    return {
    processet: state.getProcesset
}})(ProcessetPage);
