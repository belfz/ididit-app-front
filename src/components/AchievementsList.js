import React from 'react';
import { Link } from 'react-router';
import AchievementItem from './AchievementItem';

const AchievementsList = ({list, updateAchievement}) => {
  return (
    <ul>
      {list.map(a => {
        return (
          <AchievementItem achievement={a} key={a._id} />
        );  
      })}
    </ul>
  );
}

export default AchievementsList;
