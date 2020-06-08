import chai from 'chai';
const expect = chai.expect;
import {Agency, UserTypeAgency} from '../src/Agency'
let agency, tripData, execution ;

describe('Agency', () => {
  beforeEach(() => {
    agency = new Agency()
    tripData = [
      {
          "id": 1,
          "userID": 44,
          "destinationID": 49,
          "travelers": 1,
          "date": "2019/09/16",
          "duration": 8,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 2,
          "userID": 35,
          "destinationID": 25,
          "travelers": 5,
          "date": "2020/10/04",
          "duration": 18,
          "status": "pending",
          "suggestedActivities": []
      },
      {
          "id": 3,
          "userID": 3,
          "destinationID": 22,
          "travelers": 4,
          "date": "2020/05/22",
          "duration": 17,
          "status": "pending",
          "suggestedActivities": []
      },
      {
          "id": 4,
          "userID": 43,
          "destinationID": 14,
          "travelers": 2,
          "date": "2020/02/25",
          "duration": 10,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 5,
          "userID": 42,
          "destinationID": 29,
          "travelers": 3,
          "date": "2020/04/30",
          "duration": 18,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 6,
          "userID": 29,
          "destinationID": 35,
          "travelers": 3,
          "date": "2020/06/29",
          "duration": 9,
          "status": "approved",
          "suggestedActivities": []
      },
      {
        id: 1591562556483,
        userID: 50, 
        destinationID: 3, 
        travelers: 1, 
        date: "2020/06/07",
        "duration": 9,
        "status": "approved",
        "suggestedActivities": []
      }
    ]
  })
  it('should be a function', () => {
    expect(Agency).to.be.a('function')
  })
  it('should be an instance of Agency', () => {
    expect(agency).to.be.an.instanceof(Agency)
  })
  it('should have default property of agency', () => {
    expect(agency.type).to.equal('agency')
  })

  describe('new trip requests', () => {
    beforeEach(() => {
      // let execution = agency.newTripRequests(tripData)
      
    })
    it('should filter all pending trips', () => {
      let execution = agency.newTripRequests(tripData)
      expect(execution).to.eql(
      [
        {
          "id": 2,
          "userID": 35,
          "destinationID": 25,
          "travelers": 5,
          "date": "2020/10/04",
          "duration": 18,
          "status": "pending",
          "suggestedActivities": []
        },
        {
          "id": 3,
          "userID": 3,
          "destinationID": 22,
          "travelers": 4,
          "date": "2020/05/22",
          "duration": 17,
          "status": "pending",
          "suggestedActivities": []
        },
      ])
    })
    it('should not take in string', () => {
      let sadPath = agency.newTripRequests("string")
      expect(sadPath).to.equal(null)
    })
    it('should only take in trip data', () => {
      let sadPath = agency.newTripRequests(123)
      expect(sadPath).to.equal(null)
    })
    it('should return null if not passed any data', () => {
      let sadPath = agency.newTripRequests()
      expect(sadPath).to.equal(null)
    })
    it('should return a string if no pending trips', () => {
      let noPendingData = [
        {
          "id": 5,
          "userID": 42,
          "destinationID": 29,
          "travelers": 3,
          "date": "2020/04/30",
          "duration": 18,
          "status": "approved",
          "suggestedActivities": []
        }]
      let execution = agency.newTripRequests(noPendingData)
      expect(execution).to.equal('You Have No Pending Trips')
    })
  })
  describe('total income this year', () => {
    it.skip('', () => {
      
    })
    it.skip('', () => {

    })
    it.skip('', () => {

    })
    it.skip('', () => {

    })
  })
  describe('filter trips on a date', () => {
    it('should filter trip data for date and return array of travelers', () => {
      let execution = agency.filterTripsOnDate(tripData, '2020/06/07') 
      expect(execution).to.eql([
        {
          "date": "2020/06/07",
          "destinationID": 3,
          "duration": 9,
          "id": 1591562556483,
          "status": "approved",
          "suggestedActivities": [],
          "travelers": 1,
          "userID": 50,
        }
      ])
    })
    it('should return null if not passed data', () => {
      let sadPath = agency.filterTripsOnDate()
      expect(sadPath).to.equal(null)
    })
    it('should return null if passed string', () => {
      let sadPath = agency.filterTripsOnDate('garbage')
      expect(sadPath).to.equal(null)
    })
  })
  describe('travelers on trips today', () => {
    beforeEach(() => {
    })
    it('should filter trip data for date and return array of travelers', () => {
      let execution = agency.travelersOnTripsToday(tripData, '2020/06/07') 
      expect(execution).to.eql([50])
    })
    it('should return null if not passed data', () => {
      let sadPath = agency.travelersOnTripsToday()
      expect(sadPath).to.equal(null)
    })
    it('should return null if passed string', () => {
      let sadPath = agency.travelersOnTripsToday('garbage')
      expect(sadPath).to.equal(null)
    })
    it('should return string if no travelers on trips today', () => {
      let execution = agency.travelersOnTripsToday(tripData, '2020/0/07') 
      expect(execution).to.equal('There are no travelers on trips today')
    })
  })
})