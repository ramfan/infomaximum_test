import React from 'react';
import {shallow} from 'enzyme';
import App from '../componets/App'
import {Background, ButtonStyle, SpanColor} from "../componets/RooStyle";


describe('function tests', () => {
    it('component will be render', function () {
        const app = shallow(<App />)
        expect(app.find('Link')).toHaveLength(2);
    });
});