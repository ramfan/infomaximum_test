import React from 'react';
import {shallow} from 'enzyme';
import App from '../componets/App'

it('component will be render', function () {
    const app = shallow(<App />)
    expect(app.find('div')).toHaveLength(1);
});
