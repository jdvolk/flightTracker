const UserTypeTraveler = "traveler"
import moment from 'moment'; moment().format();
class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.type = UserTypeTraveler;
  }
  filterPastTrips(trips){
    /*
    All of my trips (past, present, upcoming and pending)
    */
  }
  filterPresentTrips() {

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