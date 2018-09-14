import React from 'react';
import ReactDOM  from 'react-dom';
import Root from "./componets/Root";
import {Background} from './componets/RooStyle';
import {createRenderer} from "fela";
import { Provider } from 'react-fela';
import store from "./store/store";
import HighLevelComponent from './componets/HighLevelComponen'
import './index.css'

ReactDOM.render(<HighLevelComponent/>, document.getElementById('app'));