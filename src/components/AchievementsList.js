import React from 'react';

const AchievementsList = ({list, updateAchievement}) => {
    return (
        <ul>
            {list.map(a => {
              return (
                  <li key={a._id}>
                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.content}</p>
                      <small>{a.done ? 'done' : 'undone'}</small>
                      <button onClick={() => updateAchievement(a._id, {done: !a.done})}>
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
