export const theme = {
    customInput: {
        textAlign: 'center',
        position: 'relative',
        width: '80%',
        height: '36px',
        outline: 'none',
        background: '#ffffff !important',
        marginLeft: '10%',
        marginRight: '10%',
    },
    personalPage: {
        width: '100%',
        height: '100%',
        background: '#EBF2FB',
        margin: '0',
        padding: '0',
        minHeight: '100vh',
        toggleHide: {
            paddingLeft: 0,
            display: 'block'
        },
        hovered: {
            ':hover': {
                display: 'none'
            }
        }


    },
    invalidEmailOrPassword: {
        background: '#FBF0EB',
        width: '95%',
        height: '56px',
        display: 'flex',
        paddingLeft: '5%',
        marginTop: '6%',
        paddingTop: '4%',
    }
};