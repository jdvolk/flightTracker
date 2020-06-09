const loginBox = document.querySelector(".login-box")
const agencySection = document.querySelector(".agency-homepage")
const travelerSection = document.querySelector(".traveler-homepage")
const travelerGridSection = document.querySelector(".traveler-grid")
export default {

  hideLogin() {
    loginBox.classList.toggle('hidden')
  },
  toggleTraveler() {
    travelerSection.classList.toggle('hidden')
    travelerGridSection.classList.toggle('grid')
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

}