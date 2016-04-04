import React from 'react';
import {store} from '../routes/routes';
import {updateAchievement} from '../actions/actions';

const AchievementsList = ({list}) => {
    return (
        <ul>
            {list.map(a => {
              return (
                  <li key={a._id}>
                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.content}</p>
                      <small>{a.done ? 'done' : 'undone'}</small>
                      <button onClick={() => store.dispatch(updateAchievement(a._id, {done: !a.done}))}>
                        mark as {a.done ? 'undone': 'done'}
                      </button>
                    </div>    
                  </li>
              );  
            })}
        </ul>
    );
}

export default AchievementsList;
