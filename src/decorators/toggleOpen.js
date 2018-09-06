import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component{
    state = {
        showMenu: true,
    };
    render(){
        return(
            <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
        )

    }
    toggleOpen = () => {
        this.setState ({
            showMenu: !this.state.showMenu
        });

    };
}