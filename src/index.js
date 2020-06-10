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
  // DataRepo.getAllData();
  user = await validateLogin(userName.value, pass.value);
  // trigger class of hidden on login page 
  if(user.type === UserTypeTraveler) {
    // trigger hope page if user is traveler
    DomUpdates.toggleTraveler()
    displayTravelerHomepage();
    // return user
  } else if (user.type === UserTypeAgency) {
    // trigger home page if user is agency
    DomUpdates.toggleAgency();
    displayAgencyHomepage()
    // return user
  } else {
    // error for failed login
    console.log('error')
  }
}

function displayTravelerHomepage() {
  let totalAmountSpent = user.returnTotalAmountSpent(dataRepo.trips, dataRepo.destinations);
  DomUpdates.displayTravelersTrips(user, dataRepo.trips, dataRepo.destinations)
  DomUpdates.displayAmountSpent(totalAmountSpent)
}
function displayAgencyHomepage() {
  let totalAmountEarned = user.totalIncomeThisYear(dataRepo.trips, dataRepo.destinations)
  DomUpdates.displayPendingTrips()
  DomUpdates.displayTravelersOnTrips()
  DomUpdates.displayTotalAmountEarned()

}

