import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {updateAchievement} from '../actions/actions';

const AchievementItem = ({achievement, updateAchievement}) => {
  return (
    <li key={achievement._id}>
      <div>
        <h4>{achievement.title}</h4>
        <p>{achievement.content}</p>
        <small>{achievement.done ? 'done' : 'undone'}</small>
        <button onClick={() => updateAchievement(achievement._id, {done: !achievement.done})}>
          mark as {achievement.done ? 'undone': 'done'}
        </button>
        <Link to={`/achievements/id/${achievement._id}`}>Show me!</Link>
      </div>    
    </li>
  );
};

export default connect(
    null,
    (dispatch) => ({
        updateAchievement (id, data) {
            dispatch(updateAchievement(id, data));
        }
    })
)(AchievementItem);
