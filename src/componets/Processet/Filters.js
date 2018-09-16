import React, {Component} from 'react';
import PropTypes from 'prop-types';

const style = {
    boxSizing: 'border-box',
    position: 'fixed',
    height: '100vh',
    paddingTop: '1%',
    maxHeight: '100vh',
    marginTop: '6%',
    width: '10%',
};
const buttonStyle = {
    background: '0',
    border: '1px solid #6879BB',
    borderRadius: '5px',
    color: '#6879BB',
    height: '36px',
    width: '100%'
};

class Filters extends Component {


    render() {
        return (
            <div style={style}>
                <div style={{marginBottom: '20%'}}>
                    <strong style={{color: '#535374'}}>Фильтры</strong>
                </div>

                <button style={buttonStyle} disabled={true}>Добавить фильтр</button>
            </div>
        );
    }
}

export default Filters;
