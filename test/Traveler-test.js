import chai from 'chai';
const expect = chai.expect;
import {Traveler, UserTypeTraveler} from '../src/Traveler'
let traveler, tripData, execution, travelerData, destinationData;

describe('traveler', () => {
  beforeEach(() => {
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
          "date": "2020/06/04",
          "duration": 18,
          "status": "pending",
          "suggestedActivities": []
      },
      {
          "id": 3,
          "userID": 3,
          "destinationID": 22,
          "travelers": 4,
          "date": "2020/06/05",
          "duration": 17,
          "status": "approved",
          "suggestedActivities": []
      },
      {
          "id": 4,
          "userID": 43,
          "destinationID": 14,
          "travelers": 2,
          "date": "2020/06/25",
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
          "date": "2020/06/06",
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
  it('should have default property of agency', () => {
    expect(traveler.type).to.equal('traveler')
  })
  describe('filter past/present/future/pending trips', () => {
    
  })
  describe('', () => {

  })
  describe('', () => {

  })
  describe('total amount spent', () => {

  })
})