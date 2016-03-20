import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../containers/App';
import Login from '../components/Login';
import Profile from '../components/Profile';
import { logout, getUser } from '../actions/actions';


export const store = configureStore();

function requireAuth (nextState) {
    store.dispatch(getUser()).catch(() => {
        hashHistory.replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        });
    });
}

function doLogout (nextState, replace) {
    store.dispatch(logout())
    replace({pathname: '/login'});
}

class Root extends React.Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Profile} onEnter={requireAuth}/>
                    <Route path="login" component={Login} />
                    <Route path="logout" onEnter={doLogout} />
                    <Route path="profile" component={Profile} onEnter={requireAuth}/>
                </Route>
            </Router>        
        ); 
    }
}

export default Root;
