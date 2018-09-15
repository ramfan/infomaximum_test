import React from 'react';
import {shallow} from 'enzyme';
import App from '../componets/App'
import {Background, ButtonStyle, SpanColor} from "../componets/RooStyle";
import Error from '../componets/Forms/Error'

// describe('App component tests', () => {
//     it('component will be render', function () {
//         const app = shallow(<App />)
//         expect(app.find('Link')).toHaveLength(2);
//     });
// });

describe('Custom input component tests', () => {
    it('component will be render', function () {
        const app = shallow(<Error/>)
        expect(app.find('div')).toHaveLength(0);

    });
});