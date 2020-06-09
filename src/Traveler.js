const UserTypeTraveler = "traveler"
import moment from 'moment'; moment().format();
class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.type = UserTypeTraveler;
  }
  filterTripsFromId(trips, id) {
    let allTrips = trips.filter(trip => trip.userID === id)
    return allTrips;
  }
  filterPastTrips(trips){
    let today = moment();
    allTrips = this.filterTripsFromId(trips, this.id)
    let pastTrips = allTrips.filter(trips => {
      return moment(trip.date).add(trip.duration, 'days').isBefore(today)
    })
    let activeTrips = allTrips.filter(trip => {
      let start = trip.date
      let startFormatted = moment(start, 'YYYY-MM-DD')
      let end = moment(start, 'YYYY-MM-DD').add(trip.duration,'days')
      return moment(today).isBetween(startFormatted, end)
    })
    let upComingTrips = allTrips.filter(trip => {
      return moment(trip.date, 'YYYY-MM-DD').isAfter(today)
    })
    let pendingTrips = allTrips.filter(trip => {
     return trip.status === 'pending'
    })
    let result = {
      'pastTrips': pastTrips,
      'activeTrips' : activeTrips,
      'upComingTrips' : upComingTrips,
      'pendingTrips' : pendingTrips,
    }
    return result;
    /*
    All of my trips (past, present, upcoming and pending)
    */
  }

  returnTotalAmountSpent() {
    /*
    Total amount I have spent on trips this year. 
    This should be calculated from the trips data 
    and include a travel agent’s 10% fee
    */
    // take in trip data
    // date in destination data
    // filter out all the trips using method above 
    // reduce/for each item in the filtered data
      // take the cost per person from the destination data, 
      // multiply that by the amount of people on the trip
      // add that to the acc
      // return the acc * .10

  }

}
export {Traveler, UserTypeTraveler}