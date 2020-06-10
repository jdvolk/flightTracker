const UserTypeAgency = "agency"
import moment from 'moment'; moment().format(); 
class Agency {
  constructor() {
    this.type = UserTypeAgency
  }

  newTripRequests(trips) {
    if(typeof trips === 'object'){
      let result = trips.filter(trip => trip.status === 'pending')
      return result.length > 0 ? result : 'You Have No Pending Trips'
    }
    return null
  }

  filterThisYearsTrips(trips) {
    let startOfYear = moment().startOf('year').format('YYYY-MM-DD')
    let tripsFromStartOfYear = trips.filter(trip => {
      let tripDate = moment(trip.date, 'YYYY-MM-DD')
      return moment(tripDate).isAfter(startOfYear)
    })
    return tripsFromStartOfYear
  }

  returnCostOfTrip(trip, destinations){
    let currentDestination = destinations.find(destination => destination.id === trip.destinationID);
    if(currentDestination === undefined) return 0
    let costOfLodge = currentDestination.estimatedLodgingCostPerDay * trip.travelers 
    let costOfFlight =  currentDestination.estimatedFlightCostPerPerson * trip.travelers
    return costOfFlight + costOfLodge;
  }

  totalIncomeThisYear(trips, destinations) {
    let tripsFromStartOfYear = this.filterThisYearsTrips(trips);
    let result = tripsFromStartOfYear.reduce((totalSpent, trip) => {
      return totalSpent += this.returnCostOfTrip(trip, destinations)  
    }, 0)
    return result * .1
  }

  filterTripsOnDate(trips, date) {
    if(typeof trips === 'object') {
      let filteredResult = trips.filter(trip => trip.date === date)
      return filteredResult ? filteredResult : null 
    }
    return null
  }

  activeTrips(trips) {
    let today = moment()
    let activeTrips = trips.filter(trip => {
      let start = trip.date
      let startFormatted = moment(start, 'YYYY-MM-DD')
      let end = moment(start, 'YYYY-MM-DD').add(trip.duration,'days')
      return moment(today).isBetween(startFormatted, end)
    })
    return activeTrips
  }
  
  travelersOnTripsToday(trips) {    
    if(typeof trips === 'object'){
      let activeTrips = this.activeTrips(trips)
      let result = activeTrips.map(person => person.userID)
      return result.length > 0 ? result : 'There are no travelers on trips today'
    }
    return null
  }
}
export {Agency, UserTypeAgency}
