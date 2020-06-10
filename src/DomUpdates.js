
const loginBox = document.querySelector(".login-box")
const travelerSection = document.querySelector(".traveler-homepage")
const travelerGridSection = document.querySelector(".traveler-grid")
const travelerPastTripSection = document.querySelector(".past-trips ul")
const travelerPendingTripSection = document.querySelector(".traveler-pending-trips ul")
const travelerUpComingTripSection = document.querySelector(".upcoming-trips ul")
const travelerPresentTripSection = document.querySelector(".present-trips ul")
const travelerAmountSpentSection = document.querySelector(".total-amount-spent ul")
const agencySection = document.querySelector(".agency-homepage")
const agencyTripRequestsSection = document.querySelector(".new-trip-requests ul")
const agencyActiveTripsSection = document.querySelector(".active-trips ul")
const agencyTotalIncomeSection = document.querySelector(".total-income ul")

function getDestinationForId(id, destinations) {
  return destinations.find(location => location.id === id)
}
function getUserForId(id, users) {
  return users.find(user => user.id === id)
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
  },

  displayAgencyAmountEarned(amount) {
    agencyTotalIncomeSection.innerHTML += `<li>${amount} dollars earned this year</li>`
  },

  displayActiveTrips(trips, destinations, users) {
    trips.forEach(trip => {
      let userData = getUserForId(trip.userID, users)
      let destination = getDestinationForId(trip.destinationID, destinations)
      this.activeTripHtml(trip, destination, userData, agencyActiveTripsSection)
    })
  },
  activeTripHtml(trip, destination, user, section) {
    section.innerHTML += `<li> ${user.name} is in ${destination.destination}</li>`
    section.innerText += "\n"
  },
  displayTripRequests(trips, destinations, users) {
    trips.forEach(trip => {
      let userData = getUserForId(trip.userID, users)
      let destination = getDestinationForId(trip.destinationID, destinations)
      this.pendingRequestHtml(trip, destination, userData, agencyTripRequestsSection)
    })
  },
  pendingRequestHtml(trip, destination, user, section) {
    section.innerHTML += `<li> ${user.name} to ${destination.destination}</li>`
    section.innerText += "\n"

  }
}