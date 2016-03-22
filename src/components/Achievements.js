import React from 'react';

const Achievements = ({list}) => {
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

export default Achievements;
