import axios from 'axios';
import { browserHistory } from 'react-router';
import { store } from '../routes/routes';

export const requestLogin = (credentials) => ({
   type: 'LOGIN_REQUEST',
   credentials 
});

export const requestRegister = (credentials) => ({
  type: 'REGISTER_REQUEST',
  credentials
});

export const authSuccess = (profile) => ({
   type: 'AUTH_SUCCESS',
   profile
});

export const authError = (message) => ({
   type: 'AUTH_ERROR',
   message
});

export const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('refreshToken');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + '';
    return {
        type: 'LOGOUT'
    };
};

export const achievementsFetchSuccess = (achievements) => ({
    type: 'ACHIEVEMENTS_FETCH_SUCCESS',
    achievements
});

export const achievementsShowDone = () => ({
    type: 'ACHIEVEMENTS_FILTER_SHOW_DONE'
});

export const achievementsShowUndone = () => ({
    type: 'ACHIEVEMENTS_FILTER_SHOW_UNDONE'
});

export const achievementsShowAll = () => ({
    type: 'ACHIEVEMENTS_FILTER_SHOW_ALL'
});

export const achievementUpdated = (achievement) => ({
    type: 'ACHIEVEMENT_UPDATED',
    achievement
});

export const achievementCreated = (achievement) => ({
    type: 'ACHIEVEMENT_CREATED',
    achievement
});

function onAuthSuccess (dispatch) {
  return function ({data}) {
    //when logged in it should add the Authentication header to requests
    window.localStorage.setItem('token', data.token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
    if (data.refreshToken) {
      window.localStorage.setItem('refreshToken', data.refreshToken);
    }
    dispatch(authSuccess(data.profile));  
  }
}

export function login (credentials) {
  return dispatch => {
    dispatch(requestLogin(credentials));
    return axios.post('http://localhost:3471/auth/login', credentials)
      .then(onAuthSuccess(dispatch))
      .catch(({status, statusText, data}) => {
        dispatch(authError(`${status} (${statusText}): ${data}`));
        throw data;
      });
  }
}

export function register (credentials) {
  return dispatch => {
    dispatch(requestRegister(credentials));
    //todo move the addresses to constants
    return axios.post('http://localhost:3471/auth/register', credentials)
      .then(onAuthSuccess(dispatch))
      .catch(({status, statusText, data}) => {
        dispatch(authError(`${status} (${statusText}): ${data}`));
        throw data;
      });
  }
}

export function getUser () {
    return dispatch => {
        return axios.get('http://localhost:3470/api/profile')
            .then(({data}) => {
                console.log('got user');
                dispatch(authSuccess({email: data.email}));
            })
            .catch(({status, statusText, data}) => {
                dispatch(authError(`${status} (${statusText}): ${data}`));
                throw data;
            });
    }
}

export function getAchievements () {
    return dispatch => {
      const achievementsState = store.getState().achievementsReducer;
      if (achievementsState.achievements && achievementsState.achievements.length) {
        //if the achievements were fetched already, do not ask for them again, but get the ones from the store
        dispatch(achievementsFetchSuccess(achievementsState.achievements));
        return Promise.resolve();
      }
      return axios.get('http://localhost:3470/api/achievements')
        .then(({data}) => {
          dispatch(achievementsFetchSuccess(data.achievements));
        })
        .catch(({status, statusText, data}) => {
          // TODO create getAchievements error
          // dispatch(loginError(`${status} (${statusText}): ${data}`));
          throw data;
        });
    }
}

export function updateAchievement (achievementId, updateData) {
    return dispatch => {
        return axios.put(`http://localhost:3470/api/achievements/${achievementId}`, updateData)
            .then(({data}) => {
                dispatch(achievementUpdated(data));
            })
            .catch(({status, statusText, data}) => {
                // TODO create updateAchievement error
                // dispatch(loginError(`${status} (${statusText}): ${data}`));
                throw data;
            });
    }
}

export function createAchievement (newAchievement) {
    return dispatch => {
        return axios.post('http://localhost:3470/api/achievements/', newAchievement)
            .then(({data}) => {
                dispatch(achievementCreated(data));
                browserHistory.push('/achievements');
            })
            .catch(({status, statusText, data}) => {
                // TODO create updateAchievement error
                // dispatch(loginError(`${status} (${statusText}): ${data}`));
                throw data;
            });
    }
}
