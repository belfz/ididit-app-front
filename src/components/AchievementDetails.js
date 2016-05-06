import React from 'react';
import { connect } from 'react-redux';
import { updateAchievement } from '../actions/actions';

class AchievementDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      achievement: this.props.achievements.find(a => a._id === this.props.params.id)
    }
  }
  
  render () {
    if (!this.state.achievement) {
      return <div>Achievement not found!</div>;
    }
    
    return (
      <div className="achievement-details">
        <h3>{this.state.achievement.title}</h3>
        <p>{this.state.achievement.content}</p>
        <small>{this.state.achievement.done ? 'done' : 'undone'}</small>
        <button onClick={() => this.props.updateAchievement(this.state.achievement._id, {done: !this.state.achievement.done})}>
          mark as {this.state.achievement.done ? 'undone': 'done'}
        </button>
      </div>
    );
  }
}

export default connect (
  (state) => ({
    achievements: state.achievementsReducer.achievements
  }),
  (dispatch) => ({
    updateAchievement (id, data) {
      dispatch(updateAchievement(id, data));
    }
  })
)(AchievementDetails);

//used for tests - see https://github.com/airbnb/enzyme/issues/98
export {AchievementDetails as PureAchievementDetails};
