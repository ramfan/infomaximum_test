import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {validate} from "./validate";
import {connect} from "react-redux";

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} style={touched? error?
                {borderColor: 'red'}:
                {borderColor:''}:
                {borderColor:''}} />
        </div>
    </div>
);
class EditPersonalData extends Component{
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <div>
                            <Field
                                name="firstName"
                                component={renderField}
                                type="text"
                                placeholder="Password"
                            />
                        </div>

                    </div>
                    <div>
                        <div>
                            <Field
                                name="lastName"
                                component={renderField}
                                type="text"
                                placeholder="Password"
                            />
                        </div>

                    </div>
                    <div>
                        <Field
                            name="email"
                            component={renderField}
                            type="email"
                            placeholder="Email"

                        />
                    </div>
                </div>



                <div>
                    <button type="submit" name="Submit" disabled={pristine || submitting} >
                        Submit
                    </button>
                    <button type="submit" name="Clear" disabled={pristine || submitting}  onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }


}

  EditPersonalData = reduxForm({
    form: 'EditPersonalData',

    validate
}, )(EditPersonalData);
export default connect(state => {
    return {
        initialValues: state.Profile
    }
})(EditPersonalData)
