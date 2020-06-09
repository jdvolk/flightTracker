import chai from 'chai';
const expect = chai.expect;
import {Traveler, UserTypeTraveler} from '../src/Traveler'
let traveler, tripData, execution, travelerData ;

describe('traveler', () => {
  beforeEach(() => {
    travelerData = 

    traveler = new Traveler()
  })
  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })
  it('should be an instance of Agency', () => {
    expect(traveler).to.be.an.instanceof(Traveler)
  })
  it('should have default property of agency', () => {
    expect(traveler.type).to.equal('traveler')
  })
})