import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withTheme} from "react-fela";
import ProcessCard from "./ProcessCard";
import TopBar from "./TopBar";
import LayoutComponent from "../LayoutComponent";
import Filters from "./Filters";
import MenuBar from "../Personal/MenuBar";

class ProcessetPage extends Component {

    render() {
        const style = {
            width: this.props.theme.personalPage.width,
            backgroundColor: this.props.theme.personalPage.background,

        };
       // console.log("PROCESSE", this.props);
        let elements = this.props.processet.map(element => <div key={element._id}>
            <ProcessCard data={element}/>
        </div>)
        return (
            <div>
                <LayoutComponent
                    top={<TopBar visible={true} search={true}/>}
                    left={!this.props.toggle ?  <Filters/> :<MenuBar />}
                    content={ elements}/>

            </div>

        );

    }
}
ProcessetPage = withTheme(ProcessetPage);
export default connect(state => {
    console.log("STATE_PROCESS", state)
    return {
    processet: state.getReducer.processet,
    toggle: state.getReducer.flag

}})(ProcessetPage);
