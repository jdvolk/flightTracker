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
    if(typeof trips === 'object' && typeof id === 'number') {
      let allTrips = trips.filter(trip => trip.userID === id)
      return allTrips;
    }
    return null
  }
  filterPastTrips(trips){
    let today = moment();
    if(typeof trips === 'object') {
      let allTrips = this.filterTripsFromId(trips, this.id)
      let pastTrips = allTrips.filter(trip => {
        return moment(trip.date, 'YYYY-MM-DD').add(trip.duration, 'days').isBefore(today)
      })
      return pastTrips
    }
    return null
  }
  filterActiveTrips(trips) {
    let today = moment();
    if(typeof trips === 'object') {
      let allTrips = this.filterTripsFromId(trips, this.id)
      let activeTrips = allTrips.filter(trip => {
        let start = trip.date
        let startFormatted = moment(start, 'YYYY-MM-DD')
        let end = moment(start, 'YYYY-MM-DD').add(trip.duration,'days')
        return moment(today).isBetween(startFormatted, end)
      })
      return activeTrips
    }
    return null
  }
  filterUpComingTrips(trips){
    let today = moment();
    if(typeof trips === 'object') {
      let allTrips = this.filterTripsFromId(trips, this.id)
      let upComingTrips = allTrips.filter(trip => {
        return moment(trip.date, 'YYYY-MM-DD').isAfter(today)
      })
      return upComingTrips
    }
    return null
  }
  filterPendingTrips(trips) {
    if(typeof trips === 'object') {
      let allTrips = this.filterTripsFromId(trips, this.id)
      let pendingTrips = allTrips.filter(trip => {
      return trip.status === 'pending'
      })
      return pendingTrips
    }
    return null
  }
  filterTravelerTrips(trips) {
    let pastTrips = this.filterPastTrips(trips);
    let activeTrips = this.filterActiveTrips(trips);
    let upComingTrips = this.filterUpComingTrips(trips);
    let pendingTrips = this.filterPendingTrips(trips)
    let result = {
      'pastTrips': pastTrips,
      'activeTrips' : activeTrips,
      'upComingTrips' : upComingTrips,
      'pendingTrips' : pendingTrips,
    }
    return result;
  }
    /*
    All of my trips (past, present, upcoming and pending)
    */
   returnCostOfTrip(trip, destinations){
    let currentDestination = destinations.find(destination => destination.id === trip.destinationID);
    if(currentDestination === undefined) return 0
    let costOfLodge = currentDestination.estimatedLodgingCostPerDay * trip.travelers 
    let costOfFlight =  currentDestination.estimatedFlightCostPerPerson * trip.travelers
    return costOfFlight + costOfLodge;
  }

  returnTotalAmountSpent(trips, destinations) {
    let allTrips = this.filterTripsFromId(trips, this.id);
    let totalSpent = allTrips.reduce((totalSpent, trip) => {
      return totalSpent += this.returnCostOfTrip(trip, destinations)  
    }, 0)
    return (Math.round((totalSpent * 1.1) * 100)/100)
  }
}
export {Traveler, UserTypeTraveler}