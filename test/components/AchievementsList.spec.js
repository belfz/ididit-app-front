import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import AchievementsList from '../../src/components/AchievementsList';
import AchievementItem  from '../../src/components/AchievementItem';

describe('<AchievementsList />', function () {
    it('should render achievements list', function () {
       const list = [
            {__id: 1, title: 'first', content: 'an achievement'},
            {__id: 2, title: 'second', content: 'an achievement'},
           ];
       const wrapper = shallow(<AchievementsList list={list} />);
       expect(wrapper.find(AchievementItem).length).toBe(2); 
    });
});
