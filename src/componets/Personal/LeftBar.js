import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LeftBar extends Component {


    render() {
        return (
            <div style={{
                borderLeft: '4px solid #6879BB',
                background: 'rgba(104, 121, 187, 0.1)',
                height: '48px',
                textAlign: 'center,' ,
                paddingTop: '11%'}}>
                <strong style={{
                    color: '#535374',
                    fontSize: '12px'
                }}>&nbsp;&nbsp;&nbsp;Общие данные</strong>
            </div>
        );
    }
}

export default LeftBar;
