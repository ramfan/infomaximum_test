import React from 'react';
import {shallow} from 'enzyme';
import App from '../componets/App'
import {Background, ButtonStyle, SpanColor} from "../componets/RooStyle";
import {renderEditField} from '../componets/Forms/renderField'
import Search from "../componets/Forms/Search";

describe('App component tests', () => {
    it('component will be render', function () {
        const app = shallow(<App />)
        expect(app).toMatchSnapshot();
    });
});

describe('Search component tests', () => {

    it('component will be render', function () {
        const app = shallow(<Search />)
        expect(app).toMatchSnapshot();

    });
});


