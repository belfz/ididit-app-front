import React from 'react';
import { connect } from 'react-redux';
import { createAchievement } from '../actions/actions';

class NewAchievement extends React.Component {
    constructor (props) {
        super(props);
        this.createAchievement = props.createAchievement;
        this.submitAchievement = this.submitAchievement.bind(this);
        this.onInput = this.onInput.bind(this);
        this.state = {
            achievementModel: {}
        };
    }
    
    submitAchievement (e) {
      e.preventDefault();
      this.createAchievement(Object.assign(this.state.achievementModel, {done: this.refs.doneRadio.checked}));   
    }
    
    validate (model) {
      if (!model.title || model.title.length < 1 || !model.content || model.content.length < 1) {
          return false;
      }
      return true;
    }
    
    onInput (propertyName) {
      return (e) => {
          this.setState({
              achievementModel: Object.assign(this.state.achievementModel, {[propertyName]: e.target.value})
          });
          this.refs.submitBtn.disabled = !this.validate(this.state.achievementModel);
      }
    }
    
    render () {
        return (
            <div>  
                <div>new achievement</div>
                <form onSubmit={this.submitAchievement}>
                    <div>
                        <label>
                            <span>title</span>
                            <input ref="titleInput" type="text" onInput={this.onInput('title')} />
                            {!this.state.achievementModel.title ? <span>at least 1 character!</span> : <span></span>}
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>content</span>
                            <input ref="contentInput" type="text" onInput={this.onInput('content')} />
                            {!this.state.achievementModel.content ? <span>at least 1 character!</span> : <span></span>}
                        </label>
                        </div>
                    <div>
                        <label>
                            <span>done?</span>
                            <input ref="doneRadio" type="radio" name="isDone"/>done
                            <input ref="notDoneRadio" type="radio" name="isDone" defaultChecked />not done
                        </label>
                    </div>
                    <button type="submit" ref="submitBtn" disabled>ok</button>
                    <pre>{JSON.stringify(this.state)}</pre>
                </form>
            </div>  
        ); 
    }
}

NewAchievement.propTypes = {createAchievement: React.PropTypes.func};

export default connect(
    undefined,
    (dispatch) => ({
        createAchievement (newAchievement) {
            dispatch(createAchievement(newAchievement));
        }
    })
)(NewAchievement);
