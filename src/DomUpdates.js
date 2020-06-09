const loginBox = document.querySelector(".login-box")
const agencySection = document.querySelector(".agency-homepage")
const travelerSection = document.querySelector(".traveler-homepage")
export default {

  hideLogin() {
    loginBox.classList.toggle('hidden')
  },
  toggleTraveler() {
    travelerSection.classList.toggle('hidden')
  },
  toggleAgency() {
    agencySection.classList.toggle('hidden')
  },
  updateTravelerHomepage() {

  },
  updateAgencyHomepage(){

  },

}