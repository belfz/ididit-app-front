import React from 'react';
import authComponentSubmit from '../decorators/authComponentSubmit';
import { connect } from 'react-redux';
import { register } from '../actions/actions';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Register extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this, this.props.register);
    this.state = {
      credentials: {},
      errors: {}
    };
  }
  
  validate (model) {
    let valid = true;
    const errors = {
      email: false,
      password: false
    }
    this.setState({errors});
    if (!model.email || !EMAIL_REGEXP.test(model.email)) {
      errors.email = true;
      valid = false;
    }
    if (!model.password || !model.passwordRepeated) {
      valid = false;
    }
    if (model.password && model.passwordRepeated && model.password !== model.passwordRepeated) {
      errors.password = true;
      valid = false;
    }
    this.setState({errors});
    return valid;
  }
  
  onInput (propertyName) {
    return (e) => {
      this.setState({
        credentials: Object.assign(this.state.credentials, {[propertyName]: e.target.value})
      });
      this.refs.registerBtn.disabled = !this.validate(this.state.credentials);
    }
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div>
          <label>
            <span>email</span>
            <input type="email" ref="email" placeholder="email" onInput={this.onInput('email')} />
            <span>{this.state.errors.email ? 'email is not correct!' : ''}</span>
          </label>
        </div>
        <div>
          <label>
            <span>password</span>
            <input type="password" ref="password" placeholder="password" onInput={this.onInput('password')} />
          </label>
        </div>
        <div>
          <label>
            <span>repeat password</span>
            <input type="password" ref="passwordRepeated" placeholder="repeat password" onInput={this.onInput('passwordRepeated')} />
            <span>{this.state.errors.password ? 'passwords must match!' : ''}</span>
          </label>
        </div>
        <div>
          <label>
            <span>keep me logged in after I register</span>
            <input type="checkbox" ref="refreshToken" defaultChecked />
          </label>
        </div>
        <button type="submit" ref="registerBtn" disabled>register!</button>
        <pre>{JSON.stringify(this.state)}</pre>
      </form>
    );
  }
}

export default connect(
  undefined,
  (dispatch) => ({
    register (credentials) {
      return dispatch(register(credentials));
    }
  })
)(authComponentSubmit(Register));
