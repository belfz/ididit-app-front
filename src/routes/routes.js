import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../containers/App';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Achievements from '../components/Achievements';
import NewAchievement from '../components/NewAchievement';
import { logout, getUser, getAchievements } from '../actions/actions';


export const store = configureStore();

function requireAuth (action, nextState, replace, done) {
    store.dispatch(action())
    .then(() => done())
    .catch(() => {
        browserHistory.replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        });
    });
}

function doLogout (nextState, replace) {
    store.dispatch(logout());
    replace({pathname: '/login'});
}

class Root extends React.Component {
    render () {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Profile} onEnter={requireAuth.bind(null, getUser)}/>
                    <Route path="/login" component={Login} />
                    <Route path="/logout" onEnter={doLogout} />
                    <Route path="/profile" component={Profile} onEnter={requireAuth.bind(null, getUser)}/>
                    <Route path="/achievements" component={Achievements} onEnter={requireAuth.bind(null, getAchievements)} />
                    <Route path="/achievements/new" component={NewAchievement} onEnter={requireAuth.bind(null, getAchievements)} />
                </Route>
            </Router>        
        ); 
    }
}
//profile | achievements | statistics
//       (new)(done)(undone)
//          \       \_____\update, timeline
//           \
//            \_unit

export default Root;
