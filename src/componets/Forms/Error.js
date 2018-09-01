import React from 'react';


function Error(props) {
    const {theme} = props;
    const style = {
        // background: props.theme.background,
        // opacity: props.theme.opacity,
        // width: props.theme.width,
        // height: props.theme.height
        background: '#FBF0EB',
       // opacity: '0.3',
        width: '95%',
        height: '96px',
        display: 'flex',
        paddingLeft: '5%',
        marginTop: '6%',
        paddingTop: '10%',
    };
    return (
        <div style={style}>
            <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7091 36.7497L25.2236 2.99973C24.4538 1.66635 22.5293 1.66635 21.7595 2.99973L2.27387 36.7497C1.50409 38.0831 2.46637 39.7497 4.00592 39.7497H42.9771C44.5167 39.7497 45.4789 38.0831 44.7091 36.7497ZM26.9556 1.99973C25.416 -0.666901 21.567 -0.666901 20.0274 1.99973L0.541873 35.7497C-0.997739 38.4164 0.926761 41.7497 4.00592 41.7497H42.9771C46.0563 41.7497 47.9808 38.4164 46.4412 35.7497L26.9556 1.99973ZM25.9915 33.1596C25.9915 34.1759 25.096 34.9997 23.9915 34.9997C22.8869 34.9997 21.9915 34.1759 21.9915 33.1596C21.9915 32.1435 22.8869 31.3197 23.9915 31.3197C25.096 31.3197 25.9915 32.1435 25.9915 33.1596ZM23.9915 11.9997C22.887 11.9997 21.9915 12.8951 21.9915 13.9997V27.4797C21.9915 28.5843 22.887 29.4797 23.9915 29.4797C25.0961 29.4797 25.9915 28.5843 25.9915 27.4797V13.9997C25.9915 12.8951 25.0961 11.9997 23.9915 11.9997Z" fill="#EE4141"/>
            </svg>
            <p style={{display: 'flex', paddingTop: '2%', paddingLeft: '5%'}}>Неправильная почта или пароль</p>
        </div>
    );
}


export default Error;
