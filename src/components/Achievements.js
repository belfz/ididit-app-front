import React from 'react';
import { connect } from 'react-redux';
import {store} from '../routes/routes';
import {achievementsShowDone, achievementsShowUndone, achievementsShowAll} from '../actions/actions';
import AchievementsList from './AchievementsList';

function getAll () {
    store.dispatch(achievementsShowAll());
}

function getDone () {
    store.dispatch(achievementsShowDone());
}

function getUndone () {
    store.dispatch(achievementsShowUndone());
}

const Achievements = ({dispatch, achievements, done}) => {
    return (
        <div>
            <p>achievements - todo</p>
            <button className={done === undefined ? 'ach-btn-active' : ''} onClick={getAll}>show all</button>
            <button className={done ? 'ach-btn-active' : ''} onClick={getDone}>show done</button>
            <button className={done === false ? 'ach-btn-active' : ''} onClick={getUndone}>show undone</button>
            <AchievementsList list={achievements.filter(a => {
                return done === undefined ? true : a.done === done;
            })} />
        </div>);
};

export default connect((state) => ({
    achievements: state.achievementsReducer.achievements,
    done: state.achievementsReducer.done
}))(Achievements);
