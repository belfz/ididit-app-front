import expect from 'expect';
import sinon from 'sinon';
import { requestLogin, logout } from '../../src/actions/actions';

describe('actions', () => {
   it('requestLogin should create a LOGIN_REQUEST action', function () {
       expect(requestLogin())
        .toEqual({
            type: 'LOGIN_REQUEST'
        });
   });
   
   it('should removeItem from localStorage on logout', sinon.test(function () {
      let spy = sinon.spy(window.localStorage, 'removeItem');
      logout();
      expect(spy.calledWith('token')).toBe(true); 
   }));
});
