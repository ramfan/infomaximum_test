import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProcessCard extends Component {

    render() {
       // console.log("CARD", this.props.data);
        const{data} = this.props
        return (
            <div>
                <div style={{width: '70%', height:'500px', background: '#ffffff', margin: '5%'}}>
                    <h1>{data.title}</h1>
                    <hr/>
                    <h3>{data.repeats} выполнено раз</h3>
                    <h3>{data.associate} сотрудников</h3>
                    <div><br/></div>
                </div>
            </div>


        );
    }
}

export default ProcessCard;
