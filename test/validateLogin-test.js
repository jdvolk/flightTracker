import chai from 'chai';
const expect = chai.expect;
import validateLogin from '../src/validateLogin'

describe('validateLogin', () => {
  it('should be a function', () => {
    expect(validateLogin).to.be.a('function')
  });
  it('should take in a username and password', () => {

  })
  /
  describe('ifExists', () => {
    beforeEach(() => {
      trueTest = user.ifExists(12)
      falseTest = user.ifExists("12")
      noInput = user.ifExists()
    })


  })
})