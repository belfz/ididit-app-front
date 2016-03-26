import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import Achievements from '../../src/components/Achievements';

describe('<Achievements />', function () {
    it('should render achievements list', function () {
       const list = [
            {__id: 1, title: 'first', content: 'an achievement'},
            {__id: 2, title: 'second', content: 'an achievement'},
           ];
       const wrapper = shallow(<Achievements list={list} />);
       expect(wrapper.find('li').length).toBe(2); 
    });
});
