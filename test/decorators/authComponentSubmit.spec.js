import expect from 'expect';
import authComponentSubmit from '../../src/decorators/authComponentSubmit';

describe('authComponentSubmit', function () {
  it('should add handleSubmit() function to prototype', function () {
    class Cat {};
    Cat = authComponentSubmit(Cat);
    expect(Cat.prototype.handleSubmit).toBeA(Function);
  });
});
