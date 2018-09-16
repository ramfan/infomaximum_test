import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "react-grid-system";

class ProcessCard extends Component {

    render() {
       // console.log("CARD", this.props.data);
        const{data} = this.props
        return (
            <Container fluid style={{width: '100%', marginTop: '10%',marginBottom: '5%',marginRight: '0px',height:'252px', background: '#ffffff'}}>
                    <Row style={{borderBottom: ' 1px solid #D6DCE9', padding: '1% 3% 1% 3%'}}>
                        <h1 style={{color: '#6879BB'}}>{data.title}</h1>
                    </Row>
                    <Row align="center" justify="between" style={{padding: '1% 3% 1% 3%',}}>
                        <Row align="center">
                            <Col md={1} style={{paddingBottom: '14%',marginRight: '6%'}}>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.99994L6.5 5.59802V4.18896C3.91211 4.85504 2 7.20416 2 9.99994C2 12.2527 3.24146 14.2154 5.07751 15.2413L3.13513 16.3513C1.229 14.8891 0 12.588 0 9.99994C0 6.09436 2.79858 2.84241 6.5 2.14032V0.401855L11 2.99994ZM10.9225 4.75854C12.7585 5.78448 14 7.74719 14 9.99994C14 12.7957 12.0879 15.1448 9.5 15.8109V14.4019L5 16.9999L9.5 19.598V17.8596C13.2014 17.1575 16 13.9055 16 9.99994C16 7.41187 14.771 5.11078 12.8649 3.64856L10.9225 4.75854Z" fill="#535374"/>
                                </svg>

                            </Col>
                            <Col md={3}>
                                <h1 style={{color: '#535374'}}>{data.repeats}</h1>
                                <p style={{color: '#999999', fontSize: '11px'}}> выполнено раз</p>
                            </Col>
                        </Row>
                        <Col md={3} style={{marginRight: '0%', paddingLeft: '10%' ,marginTop: '1%'}}>
                            <Row  justify="between" align="center">
                                <Row align="center" style={{marginBottom: '15%'}}>
                                     <Col md={1} >
                                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <g opacity="0.5">
                                                 <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C9.44775 3 9 3.44769 9 4C9 4.55231 9.44775 5 10 5H11V6.06189C7.05359 6.55396 4 9.92041 4 14C4 18.0796 7.05359 21.446 11 21.9381C11.3276 21.9789 11.6614 22 12 22C16.4183 22 20 18.4183 20 14C20 9.92041 16.9464 6.55396 13 6.06189V5H14C14.5522 5 15 4.55231 15 4C15 3.44769 14.5522 3 14 3H10ZM11 19.9171C11.3252 19.9716 11.6593 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8C11.6593 8 11.3252 8.02838 11 8.08295C8.16223 8.55902 6 11.027 6 14C6 16.973 8.16223 19.441 11 19.9171ZM13 11.1055C13 10.5532 12.5527 10.1055 12 10.1055C11.4473 10.1055 11 10.5532 11 11.1055V14.2964C11 14.8645 11.3203 15.384 11.8301 15.6382L13.5527 16.5C14.0469 16.7468 14.6465 16.5466 14.8945 16.0527C15.1406 15.5586 14.9414 14.958 14.4473 14.7109L13 13.9875V11.1055Z" fill="#535374"/>
                                             </g>
                                         </svg>

                                     </Col>
                                     <Col >
                                        <h4 style={{color: '#535374'}}>{data.mid_execute_time}</h4>
                                        <p style={{color: '#999999', fontSize: '12px'}}>  среднее время выполнения</p>
                                     </Col>

                                </Row>

                                <Row align="center" style={{marginBottom: '15%'}}>
                                    <Col md={1} >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                                <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C9 3.44769 9.44775 3 10 3H14C14.5522 3 15 3.44769 15 4C15 4.55231 14.5522 5 14 5H13V6.06189C16.9464 6.55396 20 9.92041 20 14C20 18.4183 16.4183 22 12 22C11.6614 22 11.3276 21.9789 11 21.9381V19.9171C11.3252 19.9716 11.6593 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8C11.6593 8 11.3252 8.02838 11 8.08295V7V6.06189V5H10C9.44775 5 9 4.55231 9 4ZM8 8C7.44775 8 7 8.44769 7 9C7 9.55231 7.44775 10 8 10H9C9.55225 10 10 9.55231 10 9C10 8.44769 9.55225 8 9 8H8ZM7 20C7 19.4477 7.44775 19 8 19H9C9.55225 19 10 19.4477 10 20C10 20.5523 9.55225 21 9 21H8C7.44775 21 7 20.5523 7 20ZM5 11C4.44775 11 4 11.4477 4 12C4 12.5523 4.44775 13 5 13H7C7.55225 13 8 12.5523 8 12C8 11.4477 7.55225 11 7 11H5ZM4 16C4 15.4477 4.44775 15 5 15H7C7.55225 15 8 15.4477 8 16C8 16.5523 7.55225 17 7 17H5C4.44775 17 4 16.5523 4 16Z" fill="#535374"/>
                                                <path d="M12 10.1055C12.5527 10.1055 13 10.5532 13 11.1055V13.9875L14.4473 14.7109C14.9414 14.958 15.1406 15.5586 14.8945 16.0527C14.6465 16.5466 14.0469 16.7468 13.5527 16.5L11.8301 15.6382C11.3203 15.384 11 14.8645 11 14.2964V11.1055C11 10.5532 11.4473 10.1055 12 10.1055Z" fill="#535374"/>
                                            </g>
                                        </svg>

                                    </Col>
                                    <Col >
                                        <h4 style={{color: '#535374'}}>{data.active_time} ({data.completed})</h4>
                                        <p style={{color: '#999999', fontSize: '12px'}}>  активное время </p>
                                    </Col>
                                </Row>

                            </Row>
                        </Col>
                        <Col md={3} style={{marginRight: '1.5%', marginLeft: '1.5%', paddingLeft: '10%' ,marginTop: '1%'}}>
                            <Row align="center">
                                <Row align="center" style={{marginBottom: '15%'}}>
                                    <Col md={1}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                                <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3C13.3375 3 12.4491 3.06781 11.6896 3.34912C11.2471 3.51306 10.7395 3.79944 10.3972 4.26093C10.0026 4.10138 9.53662 4 9 4C8.16577 4 7.22314 4.13483 6.4519 4.56335C5.62048 5.02521 5 5.83447 5 7C5 7.31854 4.9248 7.55792 4.82153 7.8161C4.81189 7.84003 4.7998 7.86938 4.78625 7.90228L4.77722 7.92426C4.73242 8.03247 4.6748 8.17181 4.63513 8.28436C4.57202 8.4632 4.5 8.7113 4.5 9C4.5 9.26477 4.5614 9.52698 4.61658 9.72003C4.67615 9.92834 4.75171 10.1345 4.82153 10.3089C4.89209 10.4854 4.96204 10.6425 5.01392 10.755L5.0376 10.806C5.04565 10.8484 5.05554 10.8973 5.0675 10.9513C5.10608 11.1244 5.17004 11.3676 5.27148 11.6214C5.36914 11.8654 5.52515 12.18 5.77515 12.4479C5.95471 12.6402 6.20203 12.8264 6.51514 12.9257C6.53113 13.0331 6.54431 13.1739 6.55066 13.3488C6.56152 13.6485 6.5509 13.9734 6.53564 14.2691C6.53174 14.3469 6.52686 14.4307 6.52197 14.514C6.51526 14.628 6.50867 14.7411 6.50452 14.8372C6.46838 14.8758 6.41089 14.9305 6.32397 15.0009C6.05908 15.2153 5.68213 15.4496 5.23547 15.7175L5.09021 15.8045L5.08765 15.806C4.70862 16.0327 4.28723 16.2847 3.95557 16.528C3.76697 16.6662 3.5603 16.8349 3.39209 17.0305C3.24036 17.207 3 17.5425 3 18V18.0047V18.0093V18.014V18.0186V18.0232V18.0278V18.0323V18.0368V18.0413V18.0458V18.0503V18.0547V18.0591V18.0635V18.0679V18.0723V18.0767V18.081V18.0853V18.0895V18.0938V18.0981V18.1023V18.1065V18.1107V18.1149V18.119V18.1231V18.1272V18.1313V18.1354V18.1394V18.1434V18.1475V18.1514V18.1554V18.1594V18.1633V18.1672V18.1711V18.1749V18.1788V18.1826V18.1865V18.1902V18.194V18.1978V18.2015V18.2053V18.209V18.2126V18.2163V18.22V18.2236V18.2272V18.2308V18.2344V18.238V18.2415V18.2451V18.2485V18.2521V18.2556V18.259V18.2625V18.2659V18.2692V18.2726V18.276V18.2794V18.2827V18.286V18.2893V18.2926V18.2959V18.2991V18.3024V18.3056V18.3088V18.312V18.3151V18.3183V18.3215V18.3246V18.3277V18.3307V18.3339V18.3369V18.34V18.343V18.3459V18.3489V18.3519V18.3549V18.3578V18.3608V18.3637V18.3666V18.3695V18.3724V18.3752V18.3781V18.3809V18.3837V18.3865V18.3893V18.392V18.3948V18.3975V18.4003V18.403V18.4056V18.4083V18.411V18.4137V18.4163V18.4189V18.4215V18.4241V18.4267V18.4293V18.4318V18.4344V18.4369V18.4394V18.4419V18.4444V18.4469V18.4493V18.4518V18.4542V18.4566V18.459V18.4614V18.4638V18.4662V18.4685V18.4709V18.4732V18.4755V18.4778V18.4801V18.4824V18.4847V18.4869V18.4891V18.4914V18.4936V18.4958V18.498V18.5002V18.5024V18.5045V18.5067V18.5088V18.5109V18.513V18.5151V18.5172V18.5193V18.5214V18.5234V18.5255V18.5275V18.5295V18.5315V18.5335V18.5355V18.5375V18.5394V18.5414V18.5433V18.5453V18.5472V18.5491V18.551V18.5529V18.5548V18.5566V18.5585V18.5604V18.5622V18.564V18.5659V18.5677V18.5695V18.5713V18.5731V18.5748V18.5766V18.5783V18.5801V18.5818V18.5836V18.5853V18.587V18.5887V18.5903V18.592V18.5937V18.5953V18.597V18.5986V18.6003V18.6019V18.6035V18.6052V18.6068V18.6083V18.6099V18.6115V18.6131V18.6146V18.6162V18.6177V18.6193V18.6208V18.6223V18.6238V18.6254V18.6268V18.6284V18.6298V18.6313V18.6328V18.6342V18.6357V18.6371V18.6385V18.64V18.6414V18.6428V18.6443V18.6457V18.6471V18.6484V18.6498V18.6512V18.6526V18.6539V18.6553V18.6567V18.658V18.6594V18.6607V18.662V18.6633V18.6647V18.666V18.6673V18.6686V18.6699V18.6711V18.6724V18.6737V18.675V18.6763V18.6776V18.6788V18.6801V18.6813V18.6825V18.6838V18.685V18.6862V18.6874V18.6887V18.6899V18.6911V18.6923V18.6935V18.6947V18.6959V18.697V18.6982V18.6994V18.7006V18.7017V18.7029V18.7041V18.7053V18.7064V18.7075V18.7087V18.7098V18.7109V18.7121V18.7133V18.7144V18.7155V18.7166V18.7177V18.7189V18.72V18.7211V18.7222V18.7233V18.7244V18.7255V18.7266V18.7277V18.7288V18.7299V18.731V18.732V18.7331V18.7342V18.7353V18.7363V18.7374V18.7385V18.7396V18.7406V18.7417V18.7427V18.7438V18.7449V18.7459V18.747V18.748V18.7491V18.7502V18.7512V18.7523V18.7533V18.7543V18.7554V18.7565V18.7575V18.7585V18.7596V18.7606V18.7617V18.7628V18.7638V18.7648V18.7659V18.7669V18.7679V18.769V18.77V18.7711V18.7721V18.7731V18.7742V18.7752V18.7762V18.7773V18.7784V18.7794V18.7805V18.7815V18.7825V18.7836V18.7846V18.7857V18.7867V18.7878V18.7888V18.7899V18.791V18.792V18.793V18.7941V18.7952V18.7962V18.7973V18.7983V18.7994V18.8005V18.8016V18.8026V18.8037V18.8047V18.8058V18.8069V18.808V18.8091V18.8102V18.8113V18.8123V18.8134V18.8145V18.8156V18.8167V18.8178V18.8189V18.8201V18.8212V18.8223V18.8234V18.8245V18.8256V18.8268V18.8279V18.829V18.8301V18.8313V18.8325V18.8336V18.8347V18.8359V18.837V18.8382V18.8394V18.8406V18.8417V18.8429V18.8441V18.8453V18.8465V18.8477V18.8489V18.8501V18.8513V18.8525V18.8537V18.8549V18.8561V18.8574V18.8586V18.8599V18.8611V18.8624V18.8636V18.8649V18.8661V18.8674V18.8687V18.87V18.8713V18.8726V18.8739V18.8752V18.8765V18.8778V18.8792V18.8805V18.8818V18.8832V18.8845V18.8859V18.8872V18.8886V18.89V18.8914V18.8928V18.8942V18.8956V18.897V18.8984V18.8998V18.9012V18.9026V18.9041V18.9055V18.907V18.9084V18.9099V18.9114V18.9129V18.9144V18.9159V18.9174V18.9189V18.9205V18.922V18.9235V18.925V18.9266V18.9282V18.9297V18.9313V18.9329V18.9345V18.9361V18.9377V18.9393V18.941V18.9426V18.9443V18.9459V18.9476V18.9493V18.9509V18.9526V18.9543V18.9561V18.9578V18.9595V18.9612V18.963V18.9647V18.9665V18.9683V18.9701V18.9719V18.9737V18.9755V18.9773V18.9791V18.981V18.9828V18.9847V18.9866V18.9885V18.9904V18.9922V18.9942V18.9961V18.998V19V20H4H7V21H8H20H21V19.9996V19.9982V19.993V19.973V19.8987V19.6464V19C21 18.0317 20.7072 17.2744 20.1812 16.7C19.6885 16.1619 19.0608 15.8651 18.5654 15.66C18.3804 15.5834 18.2194 15.5208 18.0752 15.4648L18.0715 15.4633C17.7733 15.3474 17.5475 15.2595 17.3301 15.1343C17.0693 14.984 16.9998 14.8721 16.9683 14.7501C16.9294 14.5998 16.8811 14.4382 16.8412 14.3049C16.8259 14.254 16.812 14.2073 16.8002 14.1668C16.7505 13.9959 16.7229 13.8815 16.7111 13.792C16.7054 13.7501 16.7048 13.7236 16.7053 13.7089L16.7072 13.7071L16.7333 13.681C17.2063 13.2083 17.8901 12.5251 17.9882 11.3018C18.0778 11.2535 18.203 11.1832 18.3131 11.1061C18.5031 10.9731 18.7345 10.7671 18.8944 10.4472C19.1218 9.99249 19.262 9.5141 19.262 9C19.262 8.4859 19.1218 8.00751 18.8944 7.5528C18.7836 7.33118 18.5928 7.1012 18.2938 6.96771C18.1929 6.92261 18.0939 6.89496 18 6.87958V6.87555V6.87036V6.86517V6.85999V6.85474V6.84955V6.8443V6.83905V6.83386V6.82861V6.82336V6.81812V6.81287V6.80762V6.80231V6.79706V6.79181V6.7865V6.78119V6.77594V6.77063V6.76532V6.76001V6.7547V6.74939V6.74408V6.73877V6.7334V6.72809V6.72272V6.71741V6.71204V6.70667V6.70135V6.69598V6.69061V6.68524V6.67987V6.67444V6.66907V6.6637V6.65826V6.65289V6.64746V6.64209V6.63666V6.63123V6.62579V6.62036V6.61493V6.6095V6.60406V6.59863V6.5932V6.58771V6.58228V6.57678V6.57135V6.56586V6.56042V6.55493V6.54944V6.54395V6.53845V6.53296V6.52747V6.52197V6.51648V6.51093V6.50543V6.49988V6.49438V6.48883V6.48334V6.47778V6.47223V6.46674V6.46118V6.45563V6.45007V6.44452V6.43896V6.43341V6.4278V6.42224V6.41669V6.41107V6.40552V6.3999V6.39435V6.38873V6.38312V6.37756V6.37195V6.36633V6.36072V6.3551V6.34949V6.34387V6.33826V6.33264V6.32703V6.32135V6.31573V6.31012V6.30444V6.29883V6.29315V6.28748V6.28186V6.27618V6.27051V6.26489V6.25922V6.25354V6.24786V6.24219V6.23651V6.23083V6.22516V6.21948V6.21375V6.20807V6.20239V6.19672V6.19098V6.1853V6.17957V6.17389V6.16815V6.16248V6.15674V6.151V6.14532V6.13959V6.13385V6.12811V6.12238V6.11664V6.1109V6.10516V6.09943V6.09369V6.08795V6.08221V6.07648V6.07074V6.06494V6.0592V6.05347V6.04767V6.04193V6.03613V6.0304V6.02466V6.01886V6.01306V6.00732V6.00153V5.99579V5.98999V5.98419V5.97839V5.97266V5.96686V5.96106V5.95526V5.94946V5.94366V5.93787V5.93207V5.92627V5.92047V5.91467V5.90887V5.90308V5.89728V5.89148V5.88562V5.87982V5.87402V5.86823V5.86237V5.85657V5.85077V5.84491V5.83911V5.83331V5.82745V5.82166V5.8158V5.81V5.80414V5.79834V5.79248V5.78668V5.78082V5.77502V5.76917V5.76331V5.75751V5.75165V5.74579V5.73999V5.73413V5.72827V5.72247V5.71661V5.71075V5.7049V5.6991V5.69324V5.68738V5.68152V5.67566V5.66986V5.664V5.65814V5.65228V5.64642V5.64056V5.6347V5.62885V5.62299V5.61719V5.61133V5.60547V5.59961V5.59375V5.58789V5.58203V5.57617V5.57031V5.56445V5.55859V5.55273V5.54688V5.54102V5.53516V5.5293V5.52344V5.51758V5.51172V5.50586V5.5C18 4.25842 17.0616 3.62738 16.3104 3.34918C15.5509 3.06781 14.6625 3 14 3ZM7.12048 18C7.25232 17.4973 7.49084 17.0739 7.82861 16.7247C8.32886 16.2076 8.96594 15.9454 9.44202 15.767C9.56494 15.7209 9.67737 15.6801 9.78113 15.6424L9.78503 15.641C10.1409 15.5117 10.3942 15.4197 10.6218 15.2811C10.8492 15.1426 10.9688 15.002 11.0299 14.7574C11.0699 14.5973 11.1196 14.4294 11.1604 14.292C11.1738 14.2468 11.1862 14.2049 11.1969 14.1677C11.2469 13.9948 11.2749 13.8798 11.2871 13.7893C11.2926 13.7485 11.2935 13.7224 11.2928 13.7071L11.2667 13.681C10.7937 13.2083 10.1099 12.5251 10.0118 11.3018C9.92224 11.2535 9.797 11.1832 9.68689 11.1061C9.49695 10.9731 9.2655 10.7671 9.10559 10.4472C8.87817 9.99249 8.73804 9.5141 8.73804 9C8.73804 8.4859 8.87817 8.00751 9.10559 7.5528C9.21643 7.33118 9.40723 7.1012 9.70618 6.96771C9.80713 6.92261 9.90613 6.89496 10 6.87958V6.87762V6.87323V6.86877V6.86438V6.85999V6.85559V6.85114V6.84674V6.84235V6.83795V6.83356V6.82916V6.82477V6.82031V6.81592V6.81152V6.80713V6.80273V6.79834V6.79395V6.78955V6.78516V6.78076V6.77637V6.77197V6.76758V6.76318V6.75879V6.75439V6.75V6.74561V6.74121V6.73682V6.73242V6.72803V6.72363V6.71924V6.71484V6.71045V6.70605V6.70166V6.69727V6.69287V6.68848V6.68408V6.67963V6.67523V6.67084V6.66644V6.66205V6.65765V6.65326V6.6488V6.64441V6.64001V6.63562V6.63123V6.62677V6.62238V6.61798V6.61353V6.60913V6.60474V6.60028V6.59589V6.59143V6.58704V6.58258V6.57819V6.57373V6.56934V6.56488V6.56042V6.55603V6.55157V6.54712V6.54266V6.53821V6.53381V6.52936V6.5249V6.52045V6.51599V6.51154V6.50708V6.50256V6.49811V6.49365V6.4892V6.48474V6.48022V6.47577V6.47125V6.4668V6.46228V6.45782V6.45331V6.44885V6.44434V6.43982V6.4353V6.43079V6.42627V6.42175V6.41724V6.41272V6.4082V6.40369V6.39917V6.39459V6.39008V6.38556V6.38098V6.37646V6.37189V6.36731V6.36273V6.35822V6.35364V6.34906V6.34448V6.3399V6.33533V6.33069C9.9624 6.29669 9.91382 6.25873 9.85266 6.21997C9.67969 6.11041 9.40613 6 9 6C8.33423 6 7.77686 6.11517 7.4231 6.31165C7.12952 6.47479 7 6.66553 7 7C7 7.68146 6.8252 8.19208 6.67847 8.5589C6.64429 8.64441 6.61816 8.70721 6.59644 8.75916L6.5946 8.76343C6.5647 8.83545 6.54333 8.88672 6.52112 8.95001C6.51099 8.97882 6.50525 8.99829 6.50208 9.01001C6.50549 9.03198 6.51489 9.0838 6.53967 9.17059C6.57385 9.29041 6.62329 9.42804 6.67847 9.5661C6.73291 9.70209 6.78796 9.82629 6.82983 9.91687C6.85059 9.96179 6.86755 9.99756 6.87903 10.0213L6.89172 10.0473L6.89441 10.0528L6.96912 10.2022L6.99084 10.3647L6.99121 10.3674L6.99573 10.3955C7.00049 10.4229 7.0083 10.4653 7.0199 10.5175C7.04395 10.6256 7.07996 10.7574 7.12842 10.8786C7.15149 10.936 7.17273 10.9798 7.19055 11.0121C7.92883 11.1082 8.24976 11.7531 8.35999 12.0695C8.49512 12.4575 8.53601 12.9081 8.54932 13.2762C8.56348 13.664 8.54919 14.0578 8.53308 14.3715C8.526 14.511 8.51929 14.6237 8.51379 14.7147L8.51257 14.7361C8.50488 14.8646 8.5 14.9471 8.5 15C8.5 15.4196 8.31848 15.7537 8.15515 15.9758C7.98828 16.2026 7.77905 16.3961 7.58228 16.5554C7.19092 16.8723 6.69287 17.1754 6.26453 17.4325L6.12109 17.5184L6.11646 17.5212C5.81982 17.6989 5.55847 17.8554 5.34082 18H7.12048ZM11.2139 7.22717C11.2263 7.23291 11.2279 7.23468 11.2166 7.22864L11.2139 7.22717ZM16.7834 7.22864C16.7721 7.23468 16.7737 7.23291 16.7863 7.22717L16.7834 7.22864ZM12 5.5C12 5.45703 12.0055 5.4491 12.0271 5.4259C12.0688 5.3811 12.1724 5.3031 12.3843 5.22461C12.8159 5.0647 13.4275 5 14 5C14.5725 5 15.1841 5.0647 15.6157 5.22461C15.8275 5.3031 15.9312 5.3811 15.9729 5.42596C15.9945 5.4491 16 5.45703 16 5.5V5.50586V5.51172V5.51758V5.52344V5.5293V5.53516V5.54102V5.54688V5.55273V5.55859V5.56445V5.57031V5.57617V5.58203V5.58789V5.59375V5.59961V5.60547V5.61133V5.61719V5.62299V5.62885V5.6347V5.64056V5.64642V5.65228V5.65814V5.664V5.66986V5.67566V5.68152V5.68738V5.69324V5.6991V5.7049V5.71075V5.71661V5.72247V5.72827V5.73413V5.73999V5.74579V5.75165V5.75751V5.76331V5.76917V5.77502V5.78082V5.78668V5.79248V5.79834V5.80414V5.81V5.8158V5.82166V5.82745V5.83331V5.83911V5.84491V5.85077V5.85657V5.86237V5.86823V5.87402V5.87982V5.88562V5.89148V5.89728V5.90308V5.90887V5.91467V5.92047V5.92627V5.93207V5.93787V5.94366V5.94946V5.95526V5.96106V5.96686V5.97266V5.97839V5.98419V5.98999V5.99579V6.00153V6.00732V6.01306V6.01886V6.02466V6.0304V6.03613V6.04193V6.04767V6.05347V6.0592V6.06494V6.07074V6.07648V6.08221V6.08795V6.09369V6.09943V6.10516V6.1109V6.11664V6.12238V6.12811V6.13385V6.13959V6.14532V6.151V6.15674V6.16248V6.16815V6.17389V6.17957V6.1853V6.19098V6.19672V6.20239V6.20807V6.21375V6.21948V6.22516V6.23083V6.23651V6.24219V6.24786V6.25354V6.25922V6.26489V6.27051V6.27618V6.28186V6.28748V6.29315V6.29883V6.30444V6.31012V6.31573V6.32135V6.32703V6.33264V6.33826V6.34387V6.34949V6.3551V6.36072V6.36633V6.37195V6.37756V6.38312V6.38873V6.39435V6.3999V6.40552V6.41107V6.41669V6.42224V6.4278V6.43341V6.43896V6.44452V6.45007V6.45563V6.46118V6.46674V6.47223V6.47778V6.48334V6.48883V6.49438V6.49988V6.50543V6.51093V6.51648V6.52197V6.52747V6.53296V6.53845V6.54395V6.54944V6.55493V6.56042V6.56586V6.57135V6.57678V6.58228V6.58771V6.5932V6.59863V6.60406V6.6095V6.61493V6.62036V6.62579V6.63123V6.63666V6.64209V6.64746V6.65289V6.65826V6.6637V6.66907V6.67444V6.67987V6.68524V6.69061V6.69598V6.70135V6.70667V6.71204V6.71741V6.72272V6.72809V6.7334V6.73877V6.74408V6.74939V6.7547V6.76001V6.76532V6.77063V6.77594V6.78119V6.7865V6.79181V6.79706V6.80231V6.80762V6.81287V6.81812V6.82336V6.82861V6.83386V6.83905V6.8443V6.84955V6.85474V6.85999V6.86517V6.87036V6.87555V6.88074V6.88593V6.89111V6.8963V6.90149V6.90662V6.9118V6.91693V6.92212V6.92725V6.93237V6.9375V6.94263V6.94775V6.95288V6.95795V6.96307V6.96814V6.97327V6.97833V6.9834V6.98846V6.99353V6.9986V7.00366V7.00873V7.01373V7.0188V7.0238V7.02881V7.03387V7.03888V7.04388V7.04889V7.05383V7.05884V7.06384V7.06879V7.07379V7.07874V7.08368V7.08862V7.09357V7.09851V7.10345V7.10834V7.11328V7.11816V7.12311V7.12799V7.13287V7.13776V7.14264V7.14752V7.15234V7.15723V7.16211V7.16693V7.17175V7.17657V7.1814V7.18622V7.19104V7.19586V7.20062V7.20544V7.21021V7.21497V7.21973V7.22449V7.22925V7.23401V7.23877V7.24347V7.24823V7.25293V7.25763V7.26233V7.26703V7.27173V7.27643V7.28107V7.28577V7.29041V7.29504V7.29974V7.30438V7.30896V7.3136V7.31824V7.32281V7.32745V7.33203V7.33661V7.34119V7.34576V7.35034V7.35486V7.35944V7.36395V7.36853V7.37305V7.37756V7.38208V7.38654V7.39105V7.39557V7.40002V7.40448V7.40894V7.41339V7.41785V7.4223V7.42676V7.43115V7.43555V7.44V7.4444V7.44879V7.45312V7.45752V7.46191V7.46625V7.47058V7.47491V7.47925V7.48358V7.48792V7.49225V7.49652V7.50079V7.50513V7.5094V7.51361V7.51788V7.52216V7.52637V7.53064V7.53485V7.53906V7.54327V7.54749V7.55164V7.55585V7.56V7.56415V7.56836V7.57245V7.5766V7.58075V7.58484V7.58899V7.59308V7.59717V7.60126V7.60535V7.60938V7.61346V7.61749V7.62152V7.62555V7.62958V7.63361V7.63763V7.6416V7.64557V7.6496V7.65356V7.65747V7.66144V7.66541V7.66931V7.67322V7.67712V7.68103V7.68494V7.68884V7.69269V7.69653V7.70044V7.70428V7.70807V7.71191V7.71576V7.71954V7.72333V7.72711V7.7309V7.73468V7.73846V7.74219V7.74591V7.74963V7.75336V7.75708V7.7608V7.76447V7.76819V7.77185V7.77551V7.77917V7.78278V7.78644V7.79004V7.79364V7.79724V7.80084V7.80444V7.80798V7.81158V7.81512V7.81866V7.8222V7.82568V7.82922V7.8327V7.83618V7.83966V7.84314V7.84662V7.85004V7.85352V7.85693V7.86035V7.86377V7.86713V7.87054V7.8739V7.87726V7.88062V7.88397V7.88727V7.89062V7.89392V7.89722V7.90051V7.90381V7.90704V7.91034V7.91357V7.91681V7.92004V7.92322V7.92645V7.92963V7.9328V7.93597V7.93915V7.94232V7.94543V7.94855V7.95166V7.95477V7.95789V7.96094V7.96405V7.9671V7.97015V7.97314V7.9762V7.97919V7.98224V7.98523V7.98822V7.99115V7.99414V7.99707V8C16 8.12738 16.0105 8.47455 16.2655 8.7796C16.4114 8.9541 16.6041 9.07349 16.8147 9.12933C16.9858 9.17468 17.1377 9.17035 17.2474 9.1557C17.2306 9.24872 17.197 9.35687 17.1373 9.48651C17.1157 9.49969 17.0901 9.51343 17.0463 9.53687C17.0168 9.55255 16.9794 9.57257 16.9294 9.59973C16.8171 9.66083 16.5824 9.78894 16.3851 10.0037C16.1508 10.2588 16 10.5975 16 11C16 11.5603 15.7823 11.8034 15.2928 12.2929C14.7318 12.854 14.6566 13.5142 14.7284 14.0551C14.7611 14.3019 14.825 14.5367 14.8798 14.7254C14.901 14.7983 14.9203 14.8627 14.9384 14.9227C14.973 15.0383 15.0028 15.1377 15.0317 15.2499C15.2441 16.0732 15.7966 16.559 16.3315 16.8672C16.6893 17.0734 17.1359 17.2471 17.4917 17.3856L17.499 17.3884C17.6105 17.4318 17.7129 17.4717 17.8005 17.508C18.2441 17.6916 18.5249 17.8527 18.7061 18.0505C18.8539 18.2119 19 18.4683 19 19H9C9 18.4634 9.14429 18.2412 9.26611 18.1154C9.42944 17.9464 9.68884 17.8103 10.1438 17.6398C10.2087 17.6155 10.2806 17.5897 10.3578 17.562L10.3698 17.5576C10.7469 17.4221 11.2452 17.2431 11.6622 16.9891C12.2366 16.6393 12.7551 16.1025 12.9701 15.2426C12.998 15.1305 13.0283 15.0286 13.0635 14.9097L13.0665 14.8994L13.0775 14.8621C13.0903 14.8187 13.1039 14.7729 13.1182 14.7233C13.1722 14.5364 13.2361 14.3024 13.2692 14.0566C13.3419 13.5177 13.2701 12.8559 12.7072 12.2929C12.2177 11.8034 12 11.5603 12 11C12 10.5975 11.8492 10.2588 11.6149 10.0037C11.4176 9.78894 11.1829 9.66083 11.0706 9.59973C11.0206 9.57257 10.9832 9.55255 10.9537 9.53687C10.9099 9.51343 10.8843 9.49969 10.8627 9.48651C10.803 9.35687 10.7694 9.24872 10.7526 9.1557C10.8623 9.17035 11.0142 9.17474 11.1853 9.12933C11.3959 9.07349 11.5886 8.9541 11.7345 8.7796C11.9895 8.47455 12 8.12738 12 8V7.99414V7.98828V7.98248V7.97662V7.97083V7.96503V7.95929V7.95349V7.94775V7.94196V7.93622V7.93048V7.9248V7.91907V7.91339V7.90771V7.90198V7.89636V7.89069V7.88507V7.87939V7.87378V7.86816V7.86255V7.85699V7.85138V7.84583V7.84027V7.83472V7.82916V7.82361V7.81812V7.81262V7.80713V7.80164V7.79614V7.79065V7.78522V7.77972V7.77429V7.76886V7.76343V7.75806V7.75262V7.74725V7.74182V7.73645V7.73108V7.72577V7.7204V7.71509V7.70972V7.70441V7.6991V7.69379V7.68854V7.68323V7.67798V7.67267V7.66742V7.66217V7.65692V7.65173V7.64648V7.6413V7.63605V7.63086V7.62567V7.62048V7.61536V7.61017V7.60498V7.59985V7.59473V7.5896V7.58447V7.57935V7.57422V7.56915V7.56409V7.55896V7.55389V7.54883V7.54376V7.5387V7.53369V7.52863V7.52362V7.51862V7.51355V7.50854V7.50354V7.4986V7.49359V7.48859V7.48364V7.4787V7.47369V7.46875V7.46381V7.45892V7.45398V7.44904V7.44415V7.43921V7.43433V7.42944V7.42456V7.41968V7.41479V7.40991V7.40503V7.40021V7.39539V7.3905V7.38568V7.38086V7.37604V7.37122V7.36639V7.36157V7.35681V7.35199V7.34723V7.34241V7.33765V7.33289V7.32812V7.32336V7.3186V7.31384V7.30914V7.30438V7.29968V7.29492V7.29022V7.28552V7.28082V7.27612V7.27142V7.26672V7.26202V7.25732V7.25262V7.24799V7.24329V7.23865V7.23401V7.22937V7.22467V7.22003V7.21539V7.21075V7.20618V7.20154V7.1969V7.19226V7.18768V7.18304V7.17847V7.17389V7.16925V7.16467V7.1601V7.15552V7.15094V7.14636V7.14178V7.13721V7.13269V7.12811V7.12354V7.11902V7.11444V7.10992V7.10535V7.10083V7.09631V7.0918V7.08728V7.0827V7.07819V7.07367V7.06921V7.0647V7.06018V7.05566V7.05115V7.04669V7.04218V7.03772V7.0332V7.02869V7.02423V7.01978V7.01526V7.0108V7.00635V7.00189V6.99738V6.99292V6.98846V6.98401V6.97955V6.9751V6.97064V6.96619V6.96173V6.95734V6.95288V6.94843V6.94397V6.93958V6.93512V6.93066V6.92627V6.92181V6.91742V6.91296V6.90857V6.90411V6.89972V6.89526V6.89087V6.88647V6.88202V6.87762V6.87323V6.86877V6.86438V6.85999V6.85559V6.85114V6.84674V6.84235V6.83795V6.83356V6.82916V6.82477V6.82031V6.81592V6.81152V6.80713V6.80273V6.79834V6.79395V6.78955V6.78516V6.78076V6.77637V6.77197V6.76758V6.76318V6.75879V6.75439V6.75V6.74561V6.74121V6.73682V6.73242V6.72803V6.72363V6.71924V6.71484V6.71045V6.70605V6.70166V6.69727V6.69287V6.68848V6.68408V6.67963V6.67523V6.67084V6.66644V6.66205V6.65765V6.65326V6.6488V6.64441V6.64001V6.63562V6.63123V6.62677V6.62238V6.61798V6.61353V6.60913V6.60474V6.60028V6.59589V6.59143V6.58704V6.58258V6.57819V6.57373V6.56934V6.56488V6.56042V6.55603V6.55157V6.54712V6.54266V6.53821V6.53381V6.52936V6.5249V6.52045V6.51599V6.51154V6.50708V6.50256V6.49811V6.49365V6.4892V6.48474V6.48022V6.47577V6.47125V6.4668V6.46228V6.45782V6.45331V6.44885V6.44434V6.43982V6.4353V6.43079V6.42627V6.42175V6.41724V6.41272V6.4082V6.40369V6.39917V6.39459V6.39008V6.38556V6.38098V6.37646V6.37189V6.36731V6.36273V6.35822V6.35364V6.34906V6.34448V6.3399V6.33533V6.33069V6.32611V6.32153V6.31689V6.31232V6.30768V6.3031V6.29846V6.29382V6.28918V6.28461V6.27997V6.27527V6.27063V6.26599V6.26135V6.25665V6.25201V6.24731V6.24268V6.23798V6.23328V6.22858V6.22388V6.21918V6.21448V6.20978V6.20508V6.20032V6.19562V6.19086V6.1861V6.1814V6.17664V6.17188V6.16711V6.16235V6.15753V6.15277V6.14801V6.14319V6.13837V6.13361V6.12878V6.12396V6.11914V6.11432V6.1095V6.10461V6.09979V6.09491V6.09009V6.08521V6.08032V6.07544V6.07056V6.06567V6.06079V6.05585V6.05096V6.04602V6.04108V6.03613V6.03119V6.02625V6.0213V6.01636V6.01135V6.00641V6.0014V5.9964V5.99139V5.98639V5.98138V5.97638V5.97137V5.96631V5.96124V5.95624V5.95117V5.94611V5.94104V5.93591V5.93085V5.92572V5.92065V5.91553V5.9104V5.90527V5.90015V5.89496V5.88983V5.88464V5.87946V5.87433V5.86914V5.86389V5.8587V5.85352V5.84827V5.84302V5.83783V5.83258V5.82727V5.82202V5.81677V5.81146V5.80615V5.8009V5.79559V5.79022V5.78491V5.7796V5.77423V5.76886V5.76349V5.75812V5.75275V5.74738V5.74194V5.73651V5.73108V5.72565V5.72021V5.71478V5.70935V5.70386V5.69836V5.69287V5.68738V5.68188V5.67633V5.67084V5.66528V5.65973V5.65417V5.64856V5.64301V5.63739V5.63184V5.62622V5.62054V5.61493V5.60931V5.60364V5.59796V5.59229V5.58661V5.58093V5.5752V5.56946V5.56372V5.55798V5.55225V5.54651V5.54071V5.53491V5.52911V5.52332V5.51752V5.51166V5.5058V5.5Z" fill="#535374"/>
                                            </g>
                                        </svg>

                                    </Col>
                                    <Col>
                                        <h4 style={{color: '#535374'}}>{data.associate} сотрудников</h4>
                                        <p style={{color: '#999999', fontSize: '12px'}}> учавствует в процессе</p>
                                    </Col>
                                </Row>
                                <Row align="center" style={{marginBottom: '15%'}}>
                                    <Col md={1}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                                <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.89539 2 4 2.89545 4 4V6C4 7.10455 4.89539 8 6 8H6.07324C6.28931 9.42279 6.96765 10.5038 7.89355 11.337C8.97632 12.3115 10.3779 12.9282 11.6287 13.4285C11.8805 13.5292 12.1249 13.6249 12.3612 13.7175C13.3666 14.1111 14.2261 14.4477 14.9025 14.8761C15.4688 15.2347 15.7917 15.5858 15.9259 16.0013C14.8556 16.0403 14 16.9202 14 18V20C14 21.1046 14.8954 22 16 22H18C19.1046 22 20 21.1046 20 20V18C20 16.8954 19.1046 16 18 16H17.9681C17.796 14.6842 16.95 13.8054 15.9725 13.1864C15.1168 12.6445 14.027 12.2194 13.0123 11.8236L13.0093 11.8224L12.9755 11.8093C12.77 11.7291 12.5677 11.6501 12.3713 11.5715C11.1221 11.0718 10.0237 10.5635 9.23145 9.85046C8.69397 9.36676 8.29004 8.78247 8.10742 7.99719C9.16211 7.94135 10 7.06848 10 6V4C10 2.89545 9.10461 2 8 2H6ZM8 4H6V6H8V4ZM6 16C4.89539 16 4 16.8954 4 18V20C4 21.1046 4.89539 22 6 22H8C9.10461 22 10 21.1046 10 20V18C10 16.8954 9.10461 16 8 16V14C8 13.6412 7.77417 13.5105 7.42993 13.3112C7.04968 13.091 6.52478 12.7872 6 12V16ZM8 18H6V20H8V18ZM16 18H18V20H16V18Z" fill="#535374"/>
                                            </g>
                                        </svg>

                                    </Col>
                                    <Col>
                                        <h4 style={{color: '#535374'}}>{data.scenario} сценариев</h4>
                                        <p style={{color: '#999999', fontSize: '12px'}}>в процессе </p>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col md={3} style={{marginTop: '1.5%'}}>
                            <Row align="center" style={{marginBottom: '10%'}} >
                                <Col md={4}><p style={{color: '#999999', fontSize: '12px'}}>Начало </p></Col>
                                <Col md={8}><p style={{fontSize: '12px'}}>{data.begin}</p></Col>
                            </Row>
                            <Row align="center" style={{marginBottom: '10%'}}>
                                <Col md={4}><p style={{color: '#999999', fontSize: '12px'}}>Окончание </p></Col>
                                <Col md={8}><p style={{fontSize: '12px'}}>{data.end}</p></Col>
                            </Row>
                            <Row align="center" style={{marginBottom: '10%'}}>
                                <Col md={4}><p style={{color: '#999999', fontSize: '12px'}}>Загружено </p></Col>
                                <Col md={8}><p style={{fontSize: '12px'}}>{data.data_of_load}</p></Col>
                            </Row>
                       </Col>
                </Row>
            </Container>


        );
    }
}

export default ProcessCard;
