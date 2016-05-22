import React from 'react';
import { connect } from 'react-redux';
import { updateAchievement } from '../actions/actions';

class AchievementDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      singleAchievement: this.props.singleAchievement
    }
  }
  
  render () {
    if (!this.state.singleAchievement) {
      return <div>Achievement not found!</div>;
    }
    
    return (
      <div className="achievement-details">
        <h3>{this.state.singleAchievement.title}</h3>
        <p>{this.state.singleAchievement.content}</p>
        <small>{this.state.singleAchievement.done ? 'done' : 'undone'}</small>
        <button onClick={() => this.props.updateAchievement(this.state.singleAchievement._id, {done: !this.state.singleAchievement.done})}>
          mark as {this.state.singleAchievement.done ? 'undone': 'done'}
        </button>
      </div>
    );
  }
}

export default connect (
  (state) => ({
    singleAchievement: state.achievementsReducer.singleAchievement
  }),
  (dispatch) => ({
    updateAchievement (id, data) {
      dispatch(updateAchievement(id, data));
    }
  })
)(AchievementDetails);

//used for tests - see https://github.com/airbnb/enzyme/issues/98
export {AchievementDetails as PureAchievementDetails};
