export const validate = values => {
    const errors = {};
    if(!values.password){
        errors.password = 'Required';
    }
    if(!values.firstName){
        errors.firstName = 'Required';
    }
    if(!values.lastName){
        errors.lastName = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required'
    }if (values.repassword && (values.repassword !== values.password)){
        errors.password = "don't match";
        errors.repassword = "don't match";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
};