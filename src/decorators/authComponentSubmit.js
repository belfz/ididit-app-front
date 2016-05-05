import { Router, browserHistory } from 'react-router';

export default function authComponentSubmit (component) {
  component.prototype.handleSubmit = function (authAction, event) {
    event.preventDefault();
    this.setState({});
      
    authAction({
      email: this.refs.email.value,
      password: this.refs.password.value
    })
    .then(() => {
      const loc = this.props.location;
      if (loc.state && loc.state.nextPathname) {
        browserHistory.replace({
          pathname: loc.state.nextPathname
        });
      } else {
        browserHistory.replace({
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
  return component;  
}
