import React from 'react';
import ReactDOM  from 'react-dom';
import Root from "./componets/Root";
import {Background} from './componets/RooStyle';
import {createRenderer} from "fela";
import { Provider } from 'react-fela';

const renderer = createRenderer();
ReactDOM.render(
    <Provider renderer={renderer}>
        <Root/>
    </Provider>,
    document.getElementById('app'));