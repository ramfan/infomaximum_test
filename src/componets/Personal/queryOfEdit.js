import React, {Component} from 'react';
import Error from "../Forms/Error";
import {graphql} from "react-apollo/index";
import {personalData, updateUserData} from "../../queries";
import {actionCreators} from "../../store/duckStore";
import {connect} from "react-redux";


class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag: true
        };
        this.abort = this.abort.bind(this)
    }
    render() {
        {
            this.state.flag ?

                this.props.mutate({
                    variables: {
                        id: this.props.id,
                        firstName: this.props.firstName,
                        lastName: this.props.lastName

                    }, refetchQueries: [{query: personalData, variables:{id: this.props.id}}]
                }).then(res => {

                    this.props.Profile(res.data.updateUser, this.props)

                }).catch(e => {
                    this.props.errorReport('Ошибка сервера')
                    this.abort(e);
                }) : null

        }
        return <div></div>
    }

    abort(res) {
        this.setState({
            flag: false
        });
    }
}
const {Profile, errorReport} = actionCreators
Edit = graphql(updateUserData)(Edit);
export default connect(null, {Profile, errorReport})(Edit);
