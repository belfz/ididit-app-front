import React from 'react';
import authComponentSubmit from '../decorators/authComponentSubmit';
import { connect } from 'react-redux';
import { login } from '../actions/actions';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this, this.props.login);
        this.state = {};
    }
    
    render () {
        return (
          <form onSubmit={this.handleSubmit} noValidate>
            <input type="email" ref="email" placeholder="email" />
            <input type="password" ref="password" placeholder="password" />
            <input type="checkbox" ref="refreshToken" defaultChecked />
            <span>keep me logged in</span>
            <button type="submit">login</button>
            {this.state.error && <p>{this.state.error}</p>}
          </form>  
        );
    }
}

Login.propTypes = {login: React.PropTypes.func};

export default connect(
    undefined,
    (dispatch) => ({
        login (credentials) {
            return dispatch(login(credentials));
        }
    })
)(authComponentSubmit(Login));
