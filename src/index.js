// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './css/index.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/dark-background.jpg'
import './images/login-avatar.svg'

import DataRepo from './DataRepo'
import DomUpdates from './DomUpdates'
import validateLogin from './validateLogin'
import {Traveler, UserTypeTraveler} from './Traveler'
import {Agency, UserTypeAgency} from './Agency'


const form = document.querySelector('.login-form')
const userName = document.querySelector('.user-name');
const pass = document.querySelector('.pass');
const dataRepo = new DataRepo()

form.addEventListener('submit', login)

let user;

async function login(event) {
  event.preventDefault();
  await dataRepo.getAllData();
  user = await validateLogin(userName.value, pass.value);
  if(user.type === UserTypeTraveler) {
    DomUpdates.toggleTraveler()
    displayTravelerHomepage();
  } else if (user.type === UserTypeAgency) {
    DomUpdates.toggleAgency();
    displayAgencyHomepage()
  } else {
    throw "Invalid Username and Password"
    console.log('error')
  }
}

function displayTravelerHomepage() {
  let totalAmountSpent = user.returnTotalAmountSpent(dataRepo.trips, dataRepo.destinations);
  DomUpdates.displayTravelersTrips(user, dataRepo.trips, dataRepo.destinations)
  DomUpdates.displayAmountSpent(totalAmountSpent)
}
function displayAgencyHomepage() {
  let amountEarned = user.totalIncomeThisYear(dataRepo.trips, dataRepo.destinations)
  let newTripRequests = user.newTripRequests(dataRepo.trips)
  let travelersOnTrips = user.activeTrips(dataRepo.trips)
  DomUpdates.displayAgencyAmountEarned(amountEarned)
  DomUpdates.displayActiveTrips(travelersOnTrips, dataRepo.destinations, dataRepo.travelers)
  DomUpdates.displayTripRequests(newTripRequests, dataRepo.destinations, dataRepo.travelers)

}

