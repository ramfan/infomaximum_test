import React, {Component} from 'react';
import PropTypes from 'prop-types';

const style = {
    boxSizing: 'border-box',
    position: 'fixed',
    borderLeft: '4px solid rgb(104, 121, 187)',
    background: 'rgba(104, 121, 187, 0.1)',
    height: '54px',
    paddingTop: '1%',
    maxHeight: '54px',
    marginTop: '10.2%',
    width: '10%',
    marginLeft: '-15px',
}

class LeftBar extends Component {


    render() {
        return (
            <div style={style}>
                <strong style={{
                    color: '#535374',
                    fontSize: '12px'
                }}>&nbsp;&nbsp;&nbsp;Общие данные</strong>
            </div>
        );
    }
}

export default LeftBar;
