import React from 'react';
import {shallow} from 'enzyme';
import App from '../componets/App'
import {Background, ButtonStyle, SpanColor} from "../componets/RooStyle";
import {renderEditField} from '../componets/Forms/renderField'
import Search from "../componets/Forms/Search";
import LeftBar from "../componets/Personal/LeftBar";
import Filters   from "../componets/Processet/Filters"
import {proceset} from "../assets/processet";
import ProcessCard from "../componets/Processet/ProcessCard";

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

describe('Left bar component testing on user component', () => {

    it('component will be render', function () {
        const bar = shallow(<LeftBar />)
        expect(bar).toMatchSnapshot();

    });
});
describe('Left bar component testing on Process page', () => {

    it('component will be render', function () {
        const bar = shallow(<Filters />)
        expect(bar).toMatchSnapshot();

    });
});
