import React from 'react';
import { connect } from 'react-redux';
import {achievementsShowDone, achievementsShowUndone, achievementsShowAll, updateAchievement} from '../actions/actions';
import AchievementsList from './AchievementsList';

const Achievements = ({dispatch, achievements, done, getAll, getDone, getUndone, updateAchievement}) => {
    return (
        <div>
            <p>achievements - todo</p>
            <button className={done === undefined ? 'ach-btn-active' : ''} onClick={getAll}>show all</button>
            <button className={done ? 'ach-btn-active' : ''} onClick={getDone}>show done</button>
            <button className={done === false ? 'ach-btn-active' : ''} onClick={getUndone}>show undone</button>
            <AchievementsList list={achievements.filter(a => {
                return done === undefined ? true : a.done === done;
            })} updateAchievement={updateAchievement} />
        </div>);
};

export default connect(
    (state) => ({
        achievements: state.achievementsReducer.achievements,
        done: state.achievementsReducer.done
    }),
    (dispatch) => ({
        getAll () {
            dispatch(achievementsShowAll());   
        },
        getDone () {
            dispatch(achievementsShowDone());
        },
        getUndone () {
            dispatch(achievementsShowUndone());
        },
        updateAchievement (id, data) {
            dispatch(updateAchievement(id, data));
        },
    })
)(Achievements);
