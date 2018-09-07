import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {show} from "../../Action-Creators/AC";
import {Link} from "react-router-dom";

class MenuBar extends Component {
constructor(props){
    super(props);
    this.toggleShow = this.toggleShow.bind(this)
}
toggleShow(){
    console.log('update')
    this.props.show(this.props.toggle)
}
    render() {

        const {toggle} = this.props;
        console.log('X', document.documentElement.clientHeight, 'TOP',screenTop, );
        const showMenu = {
            background: '#404064',
            height: '100%',
            textAlign: 'center,' ,


        };
        const hide = {
            display: 'none'
        };
        const style = !toggle ? showMenu : hide;
        return (
            <div style={{height: '100vh'}}>
                {
                    this.props.toggle? <div style={showMenu} onClick={this.toggleShow} >
                       <div style={{background: '#535374', height: '33px', padding: '8%'}}>
                           <div style={{padding: '5%', display: 'inline-block'}}>
                               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4V4H0V0ZM6 6H10V10H6V6ZM10 0H6V4H10V0ZM12 0H16V4H12V0ZM4 6H0V10H4V6ZM12 6H16V10H12V6ZM4 12H0V16H4V12ZM6 12H10V16H6V12ZM16 12H12V16H16V12Z" fill="white"/>
                               </svg>
                           </div>
                           <div style={{padding: '1%', display: 'inline-block', marginTop: '2%', position: 'absolute', paddingLeft: '7%'}}>
                               <svg width="140" height="24" viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <rect width="140" height="24" fill="white" fill-opacity="0.01"/>
                                   <path d="M4.4274 6.60938C6.99665 6.60938 8.40614 8.24516 8.40614 11.7C8.40614 15.1549 6.96702 16.8136 4.4274 16.8136C4.00486 16.839 3.58197 16.7708 3.1846 16.6133C2.78723 16.4557 2.42373 16.212 2.11635 15.8971V19.6544C2.11635 19.9582 2.00486 20.2496 1.80642 20.4644C1.60797 20.6792 1.33882 20.7999 1.05817 20.7999C0.777529 20.7999 0.508378 20.6792 0.309932 20.4644C0.111485 20.2496 3.87515e-07 19.9582 3.87515e-07 19.6544V7.88318C3.87515e-07 7.57937 0.111485 7.28801 0.309932 7.07318C0.508378 6.85836 0.777529 6.73767 1.05817 6.73767C1.33882 6.73767 1.60797 6.85836 1.80642 7.07318C2.00486 7.28801 2.11635 7.57937 2.11635 7.88318C2.38379 7.49123 2.73185 7.17207 3.13298 6.95097C3.53411 6.72988 3.97728 6.61293 4.4274 6.60938ZM4.15227 8.56132C2.78088 8.56132 2.03593 9.62435 2.03593 11.7229C2.03593 13.8215 2.75972 14.8616 4.15227 14.8616C5.54483 14.8616 6.26862 13.7986 6.26862 11.7229C6.26862 9.64726 5.5279 8.56132 4.15651 8.56132H4.15227Z" fill="white"/>
                                   <path d="M12.0971 7.98862C12.3053 7.57669 12.6111 7.23222 12.983 6.99063C13.355 6.74904 13.7797 6.61904 14.2134 6.61401C14.3446 6.61401 14.4745 6.64198 14.5957 6.69633C14.7169 6.75067 14.827 6.83032 14.9198 6.93074C15.0125 7.03115 15.0861 7.15036 15.1363 7.28155C15.1865 7.41275 15.2123 7.55337 15.2123 7.69537C15.2123 7.83738 15.1865 7.97799 15.1363 8.10919C15.0861 8.24039 15.0125 8.3596 14.9198 8.46001C14.827 8.56042 14.7169 8.64007 14.5957 8.69442C14.4745 8.74876 14.3446 8.77673 14.2134 8.77673C12.8589 8.77673 12.0971 9.69314 12.0971 11.1319V15.5627C12.0971 15.8665 11.9856 16.1579 11.7871 16.3727C11.5887 16.5875 11.3195 16.7082 11.0389 16.7082C10.7582 16.7082 10.4891 16.5875 10.2906 16.3727C10.0922 16.1579 9.98071 15.8665 9.98071 15.5627V7.88324C9.98071 7.57943 10.0922 7.28806 10.2906 7.07324C10.4891 6.85842 10.7582 6.73773 11.0389 6.73773C11.3195 6.73773 11.5887 6.85842 11.7871 7.07324C11.9856 7.28806 12.0971 7.57943 12.0971 7.88324V7.98862Z" fill="white"/>
                                   <path d="M20.1137 16.8136C17.4683 16.8136 15.8218 15.1778 15.8218 11.7229C15.8218 8.26807 17.4683 6.60938 20.1137 6.60938C22.7592 6.60938 24.4057 8.23141 24.4057 11.7229C24.4057 15.2144 22.7592 16.8136 20.1137 16.8136ZM20.1137 8.5659C18.7042 8.5659 17.9593 9.62893 17.9593 11.7275C17.9593 13.8261 18.7042 14.8662 20.1137 14.8662C21.5232 14.8662 22.2682 13.8032 22.2682 11.7275C22.2682 9.65184 21.5232 8.56132 20.1137 8.56132V8.5659Z" fill="white"/>
                                   <path d="M29.7983 6.60949C30.3981 6.58164 30.9961 6.69879 31.5489 6.95241C32.1017 7.20603 32.5953 7.58977 32.994 8.07574C33.1073 8.22539 33.1792 8.40667 33.2015 8.59867C33.2237 8.79067 33.1954 8.98558 33.1197 9.16089C33.0441 9.33621 32.9242 9.4848 32.7738 9.58952C32.6235 9.69424 32.4489 9.75083 32.2702 9.75276C32.1324 9.75324 31.9963 9.72109 31.8712 9.65856C31.7462 9.59603 31.6353 9.50463 31.5464 9.39078C31.3301 9.12201 31.0616 8.90829 30.7602 8.76492C30.4587 8.62155 30.1317 8.55206 29.8025 8.56143C28.4311 8.56143 27.6862 9.70694 27.6862 11.7001C27.6862 13.6933 28.4311 14.8617 29.8025 14.8617C30.5196 14.8293 31.2044 14.5299 31.7411 14.014C31.9087 13.8721 32.1167 13.7976 32.3294 13.8033C32.5236 13.8025 32.7132 13.8664 32.8725 13.9865C33.0318 14.1066 33.153 14.2769 33.2196 14.4743C33.2863 14.6717 33.2951 14.8865 33.2448 15.0895C33.1946 15.2924 33.0878 15.4737 32.9389 15.6086C32.0647 16.4124 30.9493 16.8426 29.8025 16.8182C27.1359 16.8182 25.5698 15.1641 25.5698 11.7047C25.5698 8.24527 27.1317 6.60949 29.7983 6.60949Z" fill="white"/>
                                   <path d="M38.6403 6.60938C41.9545 6.60938 42.5598 9.35859 42.5598 10.834C42.5598 11.6175 42.5598 12.5339 41.362 12.5339H36.5198C36.5198 14.0598 37.5187 14.7608 38.8139 14.7608C39.5076 14.7633 40.1849 14.5328 40.7525 14.101C40.9326 13.9522 41.1523 13.8703 41.3789 13.8673C41.5002 13.8667 41.6205 13.8921 41.7327 13.9421C41.8449 13.9921 41.9468 14.0656 42.0326 14.1585C42.1184 14.2514 42.1863 14.3618 42.2325 14.4832C42.2787 14.6047 42.3022 14.7348 42.3016 14.8662C42.2999 15.0149 42.2692 15.1615 42.2115 15.2965C42.1539 15.4315 42.0707 15.5519 41.9672 15.6497C41.0862 16.452 39.96 16.8688 38.8096 16.8181C36.0838 16.8181 34.3992 15.2282 34.3992 11.6817C34.4034 8.43302 35.9737 6.60938 38.6403 6.60938ZM36.5959 10.6186H40.4773C40.4773 9.57853 39.9271 8.56132 38.653 8.56132C38.391 8.53992 38.1277 8.57718 37.8796 8.67077C37.6315 8.76436 37.4038 8.91227 37.2108 9.10529C37.0178 9.29831 36.8636 9.5323 36.7578 9.79267C36.6521 10.053 36.5969 10.3342 36.5959 10.6186Z" fill="white"/>
                                   <path d="M46.0262 9.40899C46.0262 10.9806 50.8473 10.2567 50.8473 13.7573C50.8473 15.7505 49.2769 16.7723 47.2622 16.7723C45.5691 16.7723 44.2993 15.943 43.7914 15.2877C43.6399 15.107 43.5555 14.872 43.5543 14.6279C43.5576 14.3593 43.6577 14.1026 43.8332 13.9126C44.0087 13.7226 44.2458 13.6143 44.494 13.6107C44.7194 13.6124 44.9363 13.7037 45.1035 13.8673C45.6984 14.4342 46.4654 14.7441 47.2579 14.7379C48.1383 14.7379 48.7097 14.4813 48.7097 13.8902C48.7097 12.172 43.9056 13.0609 43.9056 9.45482C43.9056 7.54411 45.3744 6.60938 47.1775 6.60938C48.5701 6.60938 49.806 7.18213 50.352 7.92442C50.489 8.10245 50.5585 8.33001 50.5467 8.56132C50.5435 8.82999 50.4434 9.08666 50.2679 9.27666C50.0924 9.46666 49.8553 9.57497 49.6071 9.57853C49.3604 9.56553 49.1255 9.46027 48.9425 9.2807C48.4421 8.84479 47.8198 8.6057 47.1775 8.60256C46.458 8.60256 46.0262 8.87748 46.0262 9.40899Z" fill="white"/>
                                   <path d="M56.3965 6.60938C59.7107 6.60938 60.316 9.35859 60.316 10.834C60.316 11.6175 60.316 12.5339 59.1181 12.5339H54.2801C54.2801 14.0598 55.279 14.7608 56.5742 14.7608C57.2679 14.7633 57.9453 14.5328 58.5128 14.101C58.693 13.9522 58.9127 13.8703 59.1393 13.8673C59.2606 13.8667 59.3808 13.8921 59.493 13.9421C59.6052 13.9921 59.7072 14.0656 59.793 14.1585C59.8788 14.2514 59.9467 14.3618 59.9929 14.4832C60.0391 14.6047 60.0626 14.7348 60.062 14.8662C60.06 15.0148 60.0292 15.1614 59.9716 15.2963C59.914 15.4313 59.8309 15.5517 59.7276 15.6497C58.8464 16.4516 57.7203 16.8683 56.57 16.8181C53.8442 16.8181 52.1595 15.2282 52.1595 11.6817C52.1638 8.43302 53.7299 6.60938 56.3965 6.60938ZM54.3394 10.6186H58.2208C58.2208 9.57853 57.6705 8.56132 56.3965 8.56132C56.1345 8.53992 55.8712 8.57718 55.6231 8.67077C55.3749 8.76436 55.1473 8.91227 54.9543 9.10529C54.7613 9.29831 54.6071 9.5323 54.5013 9.79267C54.3955 10.053 54.3404 10.3342 54.3394 10.6186Z" fill="white"/>
                                   <path d="M62.4749 5.12489C62.4749 4.82655 62.5843 4.54043 62.7792 4.32947C62.9741 4.11851 63.2384 4 63.514 4C63.7896 4 64.0539 4.11851 64.2488 4.32947C64.4436 4.54043 64.5531 4.82655 64.5531 5.12489V6.9073H65.4335C65.6676 6.9073 65.8921 7.00795 66.0576 7.18711C66.2231 7.36628 66.316 7.60928 66.316 7.86265C66.316 8.11603 66.2231 8.35902 66.0576 8.53819C65.8921 8.71735 65.6676 8.818 65.4335 8.818H64.532V13.9499C64.5341 14.0532 64.5552 14.155 64.5939 14.2494C64.6326 14.3439 64.6881 14.4291 64.7574 14.5003C64.8266 14.5714 64.9081 14.627 64.9973 14.6638C65.0865 14.7007 65.1815 14.7181 65.2769 14.7151C65.5103 14.7322 65.7289 14.8447 65.8886 15.0297C66.0483 15.2147 66.1372 15.4585 66.1372 15.7117C66.1372 15.9649 66.0483 16.2086 65.8886 16.3937C65.7289 16.5787 65.5103 16.6911 65.2769 16.7083C63.533 16.7083 62.4537 15.4986 62.4537 13.8216V8.81342H62.0008C61.7667 8.81342 61.5423 8.71277 61.3768 8.53361C61.2113 8.35444 61.1183 8.11144 61.1183 7.85807C61.1183 7.60469 61.2113 7.3617 61.3768 7.18253C61.5423 7.00337 61.7667 6.90272 62.0008 6.90272H62.4537L62.4749 5.12489Z" fill="white"/>
                               </svg>
                           </div>

                       </div>
                        <div style={{padding: '5%'}}>

                            <div style={{padding: '3%', display: 'inline', position: 'absolute'}}>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8372 6.00003C12.7452 3.86318 11.6241 2.6401 9 0.999995C8.62134 0.825465 8.4989 1.031 8.31445 1.3403C8.03821 1.80371 7.62305 2.5 6 2.5C3.25854 2.5 3.23511 3.81643 3.20483 5.51126C3.20203 5.67108 3.1991 5.83425 3.19385 6.00003C2.5 6.00003 2.5 7.24972 2.5 8.00003C2.5 8.66262 3 10 3.25476 10C3.63342 11.512 4.41003 12.6039 5.41931 13.2611L5.04126 14.7732C5.01917 14.8057 4.99939 14.8397 4.98218 14.8751C4.45508 14.8782 3.35583 15.0203 2.36023 15.5803C1.31702 16.1671 0.375 17.2294 0.375 19V19.625H15.625V19C15.625 17.1565 14.375 16.1137 13.2795 15.566C12.7266 15.2895 12.1803 15.1196 11.7766 15.0186C11.5735 14.9679 11.4031 14.9337 11.2817 14.9121C11.2209 14.9012 11.1722 14.8935 11.1377 14.8883C11.1204 14.8856 11.1064 14.8837 11.0963 14.8823L11.0841 14.8807L11.0801 14.8802L11.0786 14.88L11.0775 14.8798L11.0389 14.875H10.9841L10.5806 13.2612C11.59 12.604 12.3666 11.512 12.7452 10C13 10 13.5 8.66262 13.5 8.00003C13.5 7.27136 13.5 6.00003 12.8372 6.00003ZM9.16174 16.8908C9.63806 16.7897 10.0162 16.6208 10.307 16.3947C10.3612 16.3525 10.4116 16.3089 10.4586 16.2641C10.5035 16.2375 10.5452 16.2123 10.5833 16.1889C10.621 16.1658 10.6553 16.1443 10.6858 16.125H10.9553C10.9794 16.1286 11.0159 16.1344 11.062 16.1426C11.1594 16.16 11.3015 16.1884 11.4734 16.2313C11.8197 16.3179 12.2734 16.4605 12.7205 16.684C13.4492 17.0483 14.0775 17.5782 14.2943 18.375H1.6842C1.85474 17.527 2.37366 17.007 2.97302 16.6697C3.74402 16.2361 4.63086 16.125 5 16.125H5.31421C5.34473 16.1443 5.37903 16.1658 5.41675 16.1889C5.58008 16.2892 5.80994 16.4232 6.07605 16.5577C6.58093 16.8131 7.31946 17.125 8 17.125C8.38635 17.125 8.79138 17.0245 9.16174 16.8908ZM9.99597 15.0822C9.99695 15.0729 9.99768 15.0637 9.99829 15.0545L9.66382 13.7171C9.14331 13.9052 8.58337 14 8 14C7.41663 14 6.85657 13.9052 6.33606 13.7171L5.99597 15.0772C6.01855 15.0914 6.04358 15.1069 6.07068 15.1236C6.21277 15.2108 6.41199 15.3268 6.64014 15.4423C7.12402 15.6869 7.6355 15.875 8 15.875C8.3645 15.875 8.87598 15.6869 9.35986 15.4423C9.58801 15.3268 9.78723 15.2108 9.92932 15.1236C9.95325 15.1089 9.97559 15.095 9.99597 15.0822ZM9.07544 2.84176C8.85291 3.08413 8.56116 3.33047 8.17236 3.53366C7.57275 3.84704 6.85376 4 6 4C5.36121 4 5.04834 4.08706 4.91528 4.14639C4.83948 4.18017 4.83679 4.19418 4.83557 4.20022C4.83545 4.20105 4.83533 4.20172 4.83496 4.20227C4.80688 4.25836 4.7583 4.40417 4.73193 4.75451C4.71411 4.98855 4.71045 5.20715 4.70593 5.47439V5.47604V5.47753C4.70312 5.64361 4.69995 5.82852 4.69312 6.04757L4.64697 7.50003H4.00659C4.00024 7.66238 4 7.82733 4 7.99893V8.00003L4.00024 8.00271C4.00085 8.01113 4.00232 8.03158 4.0072 8.06573C4.01404 8.11477 4.02576 8.17761 4.04309 8.2521C4.06165 8.33193 4.08459 8.4161 4.1106 8.50003H4.42542L4.70984 9.63558C5.21521 11.6532 6.52368 12.5 8 12.5C9.47632 12.5 10.7848 11.6532 11.2902 9.63558L11.5746 8.50003H11.8894C11.9154 8.4161 11.9384 8.33193 11.9569 8.2521C11.9742 8.17761 11.986 8.11477 11.9928 8.06573C11.9993 8.02014 12 7.99893 12 7.99893C12 7.83041 11.9998 7.66482 11.9934 7.50003H11.4004L11.3386 6.06457C11.3052 5.28848 11.1019 4.75927 10.6949 4.24847C10.3547 3.82147 9.84595 3.37466 9.07544 2.84176ZM4.3092 8.99841C4.31323 9.00445 4.31348 9.00549 4.3103 9.00021L4.3092 8.99841ZM11.6897 9.00021C11.6865 9.00549 11.6868 9.00445 11.6908 8.99841L11.6897 9.00021Z" fill="#6879BB"/>
                                </svg>
                            </div>
                            <div style={{padding: '3%', marginLeft: '16%'}}>
                                <strong style={{color: '#ffffff' , fontSize: '12px'}}>Username</strong>
                            </div>
                        </div>
                        <div style={{padding: '5%'}}>
                            <div style={{padding: '3%', display: 'inline', position: 'absolute'}}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58167 2 2 5.58173 2 10C2 14.4183 5.58167 18 10 18C12.0289 18 13.8813 17.2448 15.2916 16H15V15H16V15.2917C16.0841 15.1964 16.1659 15.0992 16.2454 15H16V14H16.9298C16.9536 13.9589 16.9769 13.9176 17 13.876V13H17.4185C17.5493 12.6766 17.6597 12.3428 17.7479 12H17V11H17.9381C17.979 10.6724 18 10.3387 18 10H17V9H17.9382C17.9054 8.73602 17.8596 8.47626 17.8018 8.22128L19.7522 7.77872C19.9146 8.49405 20 9.23764 20 10C20 15.5229 15.5228 20 10 20C4.47717 20 0 15.5229 0 10C0 4.47714 4.47717 0 10 0C10.7623 0 11.506 0.0854797 12.2213 0.247803L11.7787 2.19821C11.2076 2.06863 10.6124 2 10 2ZM16 11V10H17V11H16ZM16 12V11H15V10H14V11H13V12H12V11H11V12H12V13H13V14H14V15H15V14H16V13H17V12H16ZM15 12V11H14V12H13V13H14V14H15V13H16V12H15ZM15 12V13H14V12H15ZM14.4451 1.04004L13.5748 0.607544L13.1177 1.46506L14 1.93555C13.1177 1.46506 13.1177 1.46512 13.1174 1.46552L13.1168 1.46658L13.1147 1.47046L13.1069 1.4852L13.077 1.5416L12.9652 1.75385C12.8694 1.93646 12.7333 2.19742 12.5715 2.51193C12.2487 3.1402 11.822 3.9859 11.4099 4.84979C11.0005 5.70834 10.5951 6.60666 10.3219 7.33331C10.1873 7.69131 10.0704 8.0448 10.0068 8.34692C9.97583 8.49435 9.94714 8.67618 9.95166 8.86249C9.95508 9.00415 9.97949 9.39365 10.293 9.70709C10.6064 10.0206 10.996 10.045 11.1376 10.0484C11.3239 10.0529 11.5057 10.0242 11.6531 9.99323C11.9552 9.92963 12.3087 9.81281 12.6667 9.67822C13.3934 9.40503 14.2917 8.99957 15.1503 8.59012C16.0142 8.1781 16.8599 7.7514 17.4882 7.4285C17.8027 7.26685 18.0636 7.13074 18.2462 7.03488C18.3375 6.98694 18.4093 6.94907 18.4585 6.92303L18.5149 6.89316L18.5297 6.88531L18.5334 6.88324L18.5345 6.88269C18.5349 6.88248 18.535 6.88245 18.0646 6.00003L18.535 6.88245L19.3926 6.42523L18.9601 5.55499C17.9891 3.60126 16.3988 2.01096 14.4451 1.04004ZM14.3505 3.42618L14.4048 3.32062C15.3076 3.91736 16.0828 4.69244 16.6794 5.59534L16.574 5.64969C15.9557 5.96741 15.129 6.38443 14.2893 6.78491C13.6021 7.1127 12.9204 7.42245 12.343 7.6571C12.5776 7.07965 12.8873 6.39804 13.2152 5.71075C13.6156 4.87103 14.0327 4.04437 14.3505 3.42618Z" fill="#6879BB"/>
                                </svg>
                            </div>
                            <div style={{padding: '3%', marginLeft: '16%'}}>
                                <Link to={`/`} style={{textDecoration: 'none'}}>
                                    <strong style={{color: '#ffffff', fontSize: '12px'}}>Общие данные</strong>
                                </Link>
                            </div>

                        </div>

                    </div>: null
                }


            </div>
        );
    }
}

export default connect(state => ({
    toggle: state.menuOption.flag
}), {show})(MenuBar);
