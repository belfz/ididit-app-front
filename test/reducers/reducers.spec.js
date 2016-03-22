import expect from 'expect';
import authReducer from '../../src/reducers/authReducer';

describe('auth reducers', () => {
   it('should handle LOGIN_REQUEST', () => {
       const nextState = authReducer({}, {
           credentials: 'admin/admin', 
           type: 'LOGIN_REQUEST'
        });
       expect(nextState).toEqual({
           isFetching: true,
           credentials: 'admin/admin',
           errorMessage: '',
           profile: undefined
       });
   }); 
});
