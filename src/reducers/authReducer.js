const authReducer = (state = {
    isFetching: false, 
    profile: undefined
    }, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
      return Object.assign({}, state, {
          isFetching: true,
          credentials: action.credentials,
          errorMessage: '',
          profile: undefined
      });
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: true,
          errorMessage: '',
          profile: action.profile
      });
    case 'AUTH_ERROR':
      return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.message,
          profile: undefined
      });
    case 'LOGOUT':
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: false,
          errorMessage: '',
          profile: undefined  
      });      
    default:
      return state;
  }
};

export default authReducer;
