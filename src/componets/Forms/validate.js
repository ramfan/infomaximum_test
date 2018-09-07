export const validate = values => {
    const errors = {};
    if(!values.password){
        errors.password = 'Поле обязательно к заполнению';
    }
    if(!values.firstName){
        errors.firstName = 'Поле обязательно к заполнению';
    }
    if(!values.lastName){
        errors.lastName = 'Поле обязательно к заполнению';
    }
    if (!values.email) {
        errors.email = 'Required'
    }if (values.repassword && (values.repassword !== values.password)){
        //errors.password = null;
        errors.repassword = "Пароли не совпадают";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Проверьте правильность почты'
    }

    return errors
};