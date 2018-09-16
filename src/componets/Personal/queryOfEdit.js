import React, {Component} from 'react';
import Error from "../Forms/Error";
import {graphql} from "react-apollo/index";
import {personalData, updateUserData} from "../../queries";
import {actionCreators} from "../../store/duckStore";
import {connect} from "react-redux";


class Edit extends Component {
    constructor(props){
        super(props);
        console.log(localStorage)
        this.state = {
            flag: this.props.flag
        };
        this.abort = this.abort.bind(this)
    }

    componentDidMount(){
        this.props.mutate({
            variables: {
                id: this.props.id,
                firstName: this.props.firstName,
                lastName: this.props.lastName

            }, refetchQueries: [{query: personalData, variables:{id: this.props.id}}]
        }).then(res => {
            this.props.errorReport(null, false);
            this.props.Profile(res.data.updateUser, this.props)
        }).catch(e => {
            this.props.errorReport('Ошибка сервера. Обновите страницу и повторите еще раз', true)
        })
    }
    render() {

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
