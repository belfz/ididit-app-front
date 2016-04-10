import React from 'react';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions/actions';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.login = this.props.login;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }
    
    handleSubmit (event) {
        event.preventDefault();
        this.setState({});
        
        this.login({
            email: this.refs.email.value,
            password: this.refs.password.value
        })
        .then(() => {
            const loc = this.props.location;
            if (loc.state && loc.state.nextPathname) {
                this.props.history.replace({
                    pathname: loc.state.nextPathname
                });
            } else {
                this.props.history.replace({
                    pathname: '/profile'
                });
            }
        })
        .catch(error => {
            console.log(error);
            this.setState({
                error
            });
        });
    }
    
    render () {
        return (
          <form onSubmit={this.handleSubmit} noValidate>
            <input type="email" ref="email" placeholder="email" />
            <input type="password" ref="password" placeholder="password" />
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
)(Login);
