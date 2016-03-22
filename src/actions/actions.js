import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

//move this to axios configuration. use for refresh token.
// axios.interceptors.response.use(() => {}, (err) => {
//     console.log('err', err);
// });

export const requestLogin = (credentials) => ({
   type: 'LOGIN_REQUEST',
   credentials 
});

export const loginSuccess = (profile) => ({
   type: 'LOGIN_SUCCESS',
   profile
});

export const loginError = (message) => ({
   type: 'LOGIN_ERROR',
   message
});

export const logout = () => {
    window.localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + '';
    return {
        type: 'LOGOUT'
    };
};

export function login (credentials) {
    return dispatch => {
        dispatch(requestLogin(credentials));
        return axios.post('http://localhost:3471/auth/login', credentials)
            .then(({data}) => {
                //when logged in it should add the Authentication header to requests
                window.localStorage.setItem('token', data.token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
                dispatch(loginSuccess(data.profile));
            })
            .catch(({status, statusText, data}) => {
                dispatch(loginError(`${status} (${statusText}): ${data}`));
                throw data;
            });
    }
}

export function getUser () {
    return dispatch => {
        return axios.get('http://localhost:3470/api/restricted')
            .then(({data}) => {
                console.log('got user');
                dispatch(loginSuccess({email: data.email, achievements: data.achievements}));
            })
            .catch(({status, statusText, data}) => {
                dispatch(loginError(`${status} (${statusText}): ${data}`));
                throw data;
            });
    }
}
