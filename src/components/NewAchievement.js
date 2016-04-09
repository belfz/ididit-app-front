import React from 'react';
import { connect } from 'react-redux';
import { createAchievement } from '../actions/actions';

const NewAchievement = ({createAchievement}) => {
  let titleInput, contentInput, doneRadio, notDoneRadio;  
  function submitAchievement (e) {
      e.preventDefault();
      const achievement = {
          title: titleInput.value,
          content: contentInput.value,
          done: doneRadio.checked
      };
      //TODO add validators
      //TODO if submit button should be disabled, then need some kind of state (like stateful component)
      createAchievement(achievement);
  } 
  return (
    <div>  
        <div>new achievement</div>
        <form onSubmit={submitAchievement}>
            <div>
                <label>
                    <span>title</span>
                    <input ref={input => titleInput = input} type="text" />
                </label>
            </div>
            <div>
                <label>
                    <span>content</span>
                    <input ref={input => contentInput = input} type="text" />
                </label>
                </div>
            <div>
                <label>
                    <span>done?</span>
                    <input ref={input => doneRadio = input} type="radio" name="isDone"/>done
                    <input ref={input => notDoneRadio = input} type="radio" name="isDone" defaultChecked />not done
                </label>
            </div>
            <button type="submit">ok</button>
        </form>
    </div>  
  );  
};

export default NewAchievement;

export default connect(
    undefined,
    (dispatch) => ({
        createAchievement (newAchievement) {
            dispatch(createAchievement(newAchievement));
        }
    })
)(NewAchievement);
