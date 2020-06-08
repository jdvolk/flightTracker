const UserTypeAgency = "agency"
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
  totalIncomeThisYear(trips, destinations, date) {
    // get total income generated this year 
    // 10% of user trip cost 
    // go through the trip data 
    // for each item in the trip data 
      // use the destination id to filter out destination
      // add total cost per person from destination data
      // multiply that by travelers from the trip data
      // add that to the acc
    // return acc * .1   
  }
  filterTripsOnDate(trips, date) {
    if(typeof trips === 'object') {
      let filteredResult = trips.filter(trip => trip.date === date)
      return filteredResult ? filteredResult : null 
    }
    return null
  }
  travelersOnTripsToday(trips, date) {
    if(typeof trips === 'object'){
      let filteredResult = this.filterTripsOnDate(trips, date);
      let result = filteredResult.map(person => person.userID)
      return result.length > 0 ? result : 'There are no travelers on trips today'
    }
    return null
  }
}
export {Agency, UserTypeAgency}
