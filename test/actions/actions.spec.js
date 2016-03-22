import expect from 'expect' 
import { requestLogin } from '../../src/actions/actions';

describe('actions', () => {
   it('requestLogin should create a LOGIN_REQUEST action', () => {
       expect(requestLogin({username: 'john@doe.com', password: 'meh123'}))
        .toEqual({
            type: 'LOGIN_REQUEST',
            credentials: {username: 'john@doe.com', password: 'meh123'}
        });
   }); 
});
