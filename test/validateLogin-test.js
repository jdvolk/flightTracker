import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies)
import validateLogin from '../src/validateLogin'
import {Traveler} from '../src/Traveler'
import {Agency} from '../src/Agency'

describe('validateLogin', () => {
  it('should be a function', () => {
    expect(validateLogin).to.be.a('function')
  });

  it('should take in a username and password from any traveler then instantiate a new instance of the class', async () => {
    let happyPath = await validateLogin("traveler50", "travel2020")
    expect(happyPath).to.be.an.instanceof(Traveler)
  })
  it('should take in a username and password for an agency then instantiate a new instance of the class', () => {
    let happyPath = validateLogin("agency", "travel2020")
    expect(happyPath).to.be.an.instanceof(Agency)
  })
  
  describe('ifExists', () => {
    beforeEach(() => {
      trueTest = user.ifExists(12)
      falseTest = user.ifExists("12")
      noInput = user.ifExists()
    })


  })
})