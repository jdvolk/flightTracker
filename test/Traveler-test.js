import chai from 'chai';
import {Traveler, UserTypeTraveler} from '../src/Traveler'
import { utc } from 'moment';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
let traveler, tripData, execution, travelerData, destinationData;

describe('traveler', () => {
  beforeEach(() => {
    tripData = [
      {
          "id": 1,
          "userID": 1,
          "destinationID": 49,
          "travelers": 1,
          "date": "2019/09/16",
          "duration": 8,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 2,
          "userID": 1,
          "destinationID": 25,
          "travelers": 5,
          "date": "2020/06/04",
          "duration": 18,
          "status": "pending",
          "suggestedActivities": []
      },
      {
          "id": 3,
          "userID": 1,
          "destinationID": 22,
          "travelers": 4,
          "date": "2020/06/05",
          "duration": 17,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 4,
          "userID": 1,
          "destinationID": 14,
          "travelers": 2,
          "date": "2020/06/25",
          "duration": 10,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 5,
          "userID": 1,
          "destinationID": 29,
          "travelers": 3,
          "date": "2020/04/30",
          "duration": 18,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 6,
          "userID": 1,
          "destinationID": 35,
          "travelers": 3,
          "date": "2020/06/06",
          "duration": 9,
          "status": "approved",
          "suggestedActivities": []
      },
      {
        id: 1591562556483,
        userID: 1, 
        destinationID: 3, 
        travelers: 1, 
        date: "2020/06/07",
        "duration": 9,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        id: 159156,
        userID: 3, 
        destinationID: 3, 
        travelers: 1, 
        date: "2020/06/07",
        "duration": 9,
        "status": "approved",
        "suggestedActivities": []
      }
    ];
    destinationData = [
      {
          "id": 25,
          "destination": "New York, New York",
          "estimatedLodgingCostPerDay": 175,
          "estimatedFlightCostPerPerson": 200,
          "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
      },{
          "id": 22,
          "destination": "Rome, Italy",
          "estimatedLodgingCostPerDay": 90,
          "estimatedFlightCostPerPerson": 650,
          "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          "alt": "people standing inside a colosseum during the day"
      },{
          "id": 14,
          "destination": "Marrakesh, Morocco",
          "estimatedLodgingCostPerDay": 70,
          "estimatedFlightCostPerPerson": 830,
          "image": "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
          "alt": "people buying oranges and other fruit from a street vendor"
      },{
          "id": 29,
          "destination": "Willemstad, Curaçao",
          "estimatedLodgingCostPerDay": 80,
          "estimatedFlightCostPerPerson": 1100,
          "image": "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
          "alt": "brightly colored buildings near body of water"
      },{
        "id": 35,
        "destination": "Anchorage, Alaska",
        "estimatedLodgingCostPerDay": 200,
        "estimatedFlightCostPerPerson": 100,
        "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "man riding on kayak surrounded by mountains"
      }];
      
    travelerData = {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    },

    traveler = new Traveler(travelerData)
  })
  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })
  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler)
  })
  it('should have default property of traveler', () => {
    expect(traveler.type).to.equal('traveler')
  })
  it('should have property of id', () => {
    expect(traveler.id).to.equal(1)
  })
  it('should have name', () => {
    expect(traveler.name).to.equal("Ham Leadbeater")
  })
  it('should have travelerType', () => {
    expect(traveler.travelerType).to.equal("relaxer")
  })
  describe('filter trips from id', () => {
    it('should filter trips from an id', () => {
      let execution = traveler.filterTripsFromId(tripData, traveler.id)
      expect(execution).to.eql(
        [
        {
            "id": 1,
            "userID": 1,
            "destinationID": 49,
            "travelers": 1,
            "date": "2019/09/16",
            "duration": 8,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 2,
            "userID": 1,
            "destinationID": 25,
            "travelers": 5,
            "date": "2020/06/04",
            "duration": 18,
            "status": "pending",
            "suggestedActivities": []
        },
        {
            "id": 3,
            "userID": 1,
            "destinationID": 22,
            "travelers": 4,
            "date": "2020/06/05",
            "duration": 17,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 4,
            "userID": 1,
            "destinationID": 14,
            "travelers": 2,
            "date": "2020/06/25",
            "duration": 10,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 5,
            "userID": 1,
            "destinationID": 29,
            "travelers": 3,
            "date": "2020/04/30",
            "duration": 18,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 6,
            "userID": 1,
            "destinationID": 35,
            "travelers": 3,
            "date": "2020/06/06",
            "duration": 9,
            "status": "approved",
            "suggestedActivities": []
        },
        {
          id: 1591562556483,
          userID: 1, 
          destinationID: 3, 
          travelers: 1, 
          date: "2020/06/07",
          "duration": 9,
          "status": "approved",
          "suggestedActivities": []
        }]
      )
    })
    it('should only take in valid parameters', () => {
      let execution = traveler.filterTripsFromId(1, '1');
      expect(execution).to.equal(null);
    })
  })
  describe('filter past/present/future/pending trips', () => {
    it('should filter past trips', () => {
      let execution = traveler.filterPastTrips(tripData);
      expect(execution).to.eql(
        [
          {
            id: 1,
            userID: 1,
            destinationID: 49,
            travelers: 1,
            date: '2019/09/16',
            duration: 8,
            status: 'approved',
            suggestedActivities: []
          },
          {
            id: 5,
            userID: 1,
            destinationID: 29,
            travelers: 3,
            date: '2020/04/30',
            duration: 18,
            status: 'approved',
            suggestedActivities: []
          }
        ]
      )
    })
    it('should return null if not passed correct data type', () => {
      let execution = traveler.filterPastTrips(2);
      expect(execution).to.equal(null)
    })
    it('should filter active trips', () => {
      let execution = traveler.filterActiveTrips(tripData);
      expect(execution).to.eql(
        [
          {
            id: 2,
            userID: 1,
            destinationID: 25,
            travelers: 5,
            date: '2020/06/04',
            duration: 18,
            status: 'pending',
            suggestedActivities: []
          },
          {
            id: 3,
            userID: 1,
            destinationID: 22,
            travelers: 4,
            date: '2020/06/05',
            duration: 17,
            status: 'approved',
            suggestedActivities: []
          },
          {
            id: 6,
            userID: 1,
            destinationID: 35,
            travelers: 3,
            date: '2020/06/06',
            duration: 9,
            status: 'approved',
            suggestedActivities: []
          },
          {
            id: 1591562556483,
            userID: 1,
            destinationID: 3,
            travelers: 1,
            date: '2020/06/07',
            duration: 9,
            status: 'approved',
            suggestedActivities: []
          }
        ]
      )
    })
    it('should return null if not passed correct data type', () => {
      let execution = traveler.filterActiveTrips("three");
      expect(execution).to.equal(null)
    })
    it('should filter up coming trips', () => {
      let execution = traveler.filterUpComingTrips(tripData);
      expect(execution).to.eql(
        [
          {
            id: 4,
            userID: 1,
            destinationID: 14,
            travelers: 2,
            date: '2020/06/25',
            duration: 10,
            status: 'approved',
            suggestedActivities: []
          }
        ]
      )
    })
    it('should return null if not passed correct data type', () => {
      let execution = traveler.filterUpComingTrips('lol');
      expect(execution).to.equal(null)
    })
    it('should filter pending trips', () => {
      let execution = traveler.filterPendingTrips(tripData);
      expect(execution).to.eql(
        [
          {
            id: 2,
            userID: 1,
            destinationID: 25,
            travelers: 5,
            date: '2020/06/04',
            duration: 18,
            status: 'pending',
            suggestedActivities: []
          }
        ]
      )
    })
    it('should return null if not passed correct data type', () => {
      let execution = traveler.filterPendingTrips(2);
      expect(execution).to.equal(null)
    })
    it('should return object with all travelers trips organized', () => {
      let execution = traveler.filterTravelerTrips(tripData)
      expect(execution).to.eql(
        {
          pastTrips: [
            {
              id: 1,
              userID: 1,
              destinationID: 49,
              travelers: 1,
              date: '2019/09/16',
              duration: 8,
              status: 'approved',
              suggestedActivities: []
            },
            {
              id: 5,
              userID: 1,
              destinationID: 29,
              travelers: 3,
              date: '2020/04/30',
              duration: 18,
              status: 'approved',
              suggestedActivities: []
            }
          ],
          activeTrips: [
            {
              id: 2,
              userID: 1,
              destinationID: 25,
              travelers: 5,
              date: '2020/06/04',
              duration: 18,
              status: 'pending',
              suggestedActivities: []
            },
            {
              id: 3,
              userID: 1,
              destinationID: 22,
              travelers: 4,
              date: '2020/06/05',
              duration: 17,
              status: 'approved',
              suggestedActivities: []
            },
            {
              id: 6,
              userID: 1,
              destinationID: 35,
              travelers: 3,
              date: '2020/06/06',
              duration: 9,
              status: 'approved',
              suggestedActivities: []
            },
            {
              id: 1591562556483,
              userID: 1,
              destinationID: 3,
              travelers: 1,
              date: '2020/06/07',
              duration: 9,
              status: 'approved',
              suggestedActivities: []
            }
          ],
          upComingTrips: [
            {
              id: 4,
              userID: 1,
              destinationID: 14,
              travelers: 2,
              date: '2020/06/25',
              duration: 10,
              status: 'approved',
              suggestedActivities: []
            }
          ],
          pendingTrips: [
            {
              id: 2,
              userID: 1,
              destinationID: 25,
              travelers: 5,
              date: '2020/06/04',
              duration: 18,
              status: 'pending',
              suggestedActivities: []
            }
          ]
        }
      )
    })

  })
  describe('spies', () => {
    beforeEach(() => {
      chai.spy.on(traveler, ['filterTripsFromId','filterPastTrips', 'filterActiveTrips', 'filterUpComingTrips', 'filterPendingTrips'], () => {})
    })
    it('should call past trips - test', () => {
      traveler.filterPastTrips(tripData)
      expect(traveler.filterPastTrips).to.have.been.called(1)      
    })
    it('should call filter functions', () => {
      traveler.filterTravelerTrips(tripData)
      expect(traveler.filterPastTrips).to.have.been.called(1)      
      expect(traveler.filterActiveTrips).to.have.been.called(1)      
      expect(traveler.filterUpComingTrips).to.have.been.called(1)      
      expect(traveler.filterPendingTrips).to.have.been.called(1)      
    })

  })
  describe('total amount spent', () => {
    it('should return total amount spent', () => {
      let execution = traveler.returnTotalAmountSpent(tripData, destinationData)
      expect(execution).to.equal(12182.50)
    })
  })
})