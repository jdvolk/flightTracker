
const loginBox = document.querySelector(".login-box")
const agencySection = document.querySelector(".agency-homepage")
const travelerSection = document.querySelector(".traveler-homepage")
const travelerGridSection = document.querySelector(".traveler-grid")
const travelerPastTripSection = document.querySelector(".past-trips ul")
const travelerPendingTripSection = document.querySelector(".traveler-pending-trips ul")
const travelerUpComingTripSection = document.querySelector(".upcoming-trips ul")
const travelerPresentTripSection = document.querySelector(".present-trips ul")
const travelerAmountSpentSection = document.querySelector(".total-amount-spent ul")

function getDestinationForId(id, destinations) {
  return destinations.find(location => location.id === id)
}

export default {

  hideLogin() {
    loginBox.classList.toggle('hidden')
  },
  toggleTraveler() {
    travelerSection.classList.toggle('hidden')
    travelerGridSection.classList.toggle('grid', 'hidden')
    this.hideLogin()
  },
  toggleAgency() {
    agencySection.classList.toggle('hidden')
    agencySection.classList.toggle('grid')
    this.hideLogin();
  },
  updateTravelerHomepage() {
    

  },
  updateAgencyHomepage(){

  },
  displayTravelersTrips(user, trips, destinations) {
    let travelerTrips = user.filterTravelerTrips(trips)

    travelerTrips.pastTrips.forEach(trip => {
      let destination = getDestinationForId(trip.destinationID, destinations)
      this.displayTripForSection(trip, destination, travelerPastTripSection)
    })
    travelerTrips.pendingTrips.forEach(trip => {
      let destination = getDestinationForId(trip.destinationID, destinations)
      this.displayTripForSection(trip, destination, travelerPendingTripSection)
    })
    travelerTrips.upComingTrips.forEach(trip => {
      let destination = getDestinationForId(trip.destinationID, destinations)
      this.displayTripForSection(trip, destination, travelerUpComingTripSection)
    })
    travelerTrips.activeTrips.forEach(trip => {
      let destination = getDestinationForId(trip.destinationID, destinations)
      this.displayTripForSection(trip, destination, travelerPresentTripSection)
    })
  },
  displayTripForSection(trip, destination, section) {
    section.innerHTML += `<li> ${(trip.date).split('/').reverse().join("-")}: ${destination.destination}</li> `;
  },
  displayAmountSpent(amount) {
    travelerAmountSpentSection.innerHTML += `<li>$${amount} including 10% ($${Math.round(amount * 0.1)}) for the Travel Agency</li>`
  }


}