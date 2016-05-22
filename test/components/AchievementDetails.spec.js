import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { PureAchievementDetails as AchievementDetails } from '../../src/components/AchievementDetails';

describe('<AchievementDetails />', function () {
  const singleAchievement = {
        _id: 123,
        title: 'Title123',
        content: 'Content123',
        done: false
      };
  
  it('should render achievement details', function () {
    const wrapper = shallow(<AchievementDetails singleAchievement={singleAchievement} />);
    expect(wrapper.find('div.achievement-details').length).toBe(1);
  });
  
  it('should not render achievement details', function () {
    const wrapper = shallow(<AchievementDetails singleAchievement={undefined} />);
    expect(wrapper.find('div.achievement-details').length).toBe(0);
  });
});
