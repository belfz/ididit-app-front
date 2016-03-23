import expect from 'expect';
import sinon from 'sinon';
import { requestLogin, logout } from '../../src/actions/actions';

describe('actions', () => {
   it('requestLogin should create a LOGIN_REQUEST action', () => {
       expect(requestLogin({username: 'john@doe.com', password: 'meh123'}))
        .toEqual({
            type: 'LOGIN_REQUEST',
            credentials: {username: 'john@doe.com', password: 'meh123'}
        });
   });
   
   it('should removeItem from localStorage on logout', () => {
      let spy = sinon.spy(window.localStorage, 'removeItem');
      logout();
      expect(spy.calledWith('token')).toBe(true); 
   });
});
