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

const loginButton = document.querySelector('.login');
let form = document.querySelector('.login-form')
let userName = document.querySelector('.user-name');
let pass = document.querySelector('.pass');

// let login, traveler,agency, dataRepo, domUpdates;


loginButton.addEventListener('click', login)

async function login(event) {
  await DataRepo.getAllData();
  event.preventDefault();
  let user = await validateLogin(userName.value, pass.value);
  // trigger class of hidden on login page 
  if(user.type === UserTypeTraveler) {
    // trigger hope page if user is traveler
    DomUpdates.toggleTraveler()
    DomUpdates.hideLogin()
  } else if (user.type === UserTypeAgency) {
    // trigger home page if user is agency
    DomUpdates.toggleAgency();
    DomUpdates.hideLogin()
  } else {
    // error for failed login
    console.log('error')
  }
}
