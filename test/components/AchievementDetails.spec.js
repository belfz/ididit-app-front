import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { PureAchievementDetails as AchievementDetails } from '../../src/components/AchievementDetails';

describe('<AchievementDetails />', function () {
  const achievements = [
      {
        _id: 123,
        title: 'Title123',
        content: 'Content123',
        done: false
      }
    ];
  
  it('should render achievement details', function () {
    const params = {
      id: 123
    };
    const wrapper = shallow(<AchievementDetails achievements={achievements} params={params} />);
    expect(wrapper.find('div.achievement-details').length).toBe(1);
  });
  
  it('should not render achievement details', function () {
    const params = {
      id: 'noop'
    };
    const wrapper = shallow(<AchievementDetails achievements={achievements} params={params} />);
    expect(wrapper.find('div.achievement-details').length).toBe(0);
  });
});
