import React from 'react';

const AchievementsList = ({list}) => {
    return (
        <ul>
            {list.map(a => {
              return (
                  <li key={a.__id}>
                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.content}</p>
                    </div>    
                  </li>
              );  
            })}
        </ul>
    );
}

export default AchievementsList;
