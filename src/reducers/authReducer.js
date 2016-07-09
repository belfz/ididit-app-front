const authReducer = (state = {
  isFetching: false,
  profile: undefined,
  isLoggedIn: false
}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        errorMessage: '',
        profile: undefined,
        isLoggedIn: false
      });
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: '',
        profile: action.profile,
        isLoggedIn: true
      });
    case 'AUTH_ERROR':
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message,
        profile: undefined,
        isLoggedIn: false
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        isFetching: false,
        credentials: undefined,
        errorMessage: '',
        profile: undefined,
        isLoggedIn: false
      });
    default:
      return state;
  }
};

export default authReducer;
