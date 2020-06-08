const loginBox = document.querySelector(".login-box")
const agencySection = document.querySelector(".agency-homepage")
const travelerSection = document.querySelector(".traveler-homepage")
export default {

  hideLogin() {
    debugger
    loginBox.classList.toggle('hidden')
  },
  toggleAgency() {
    debugger
    agencySection.classList.toggle('hidden')

  },
  toggleTraveler() {
    debugger
    travelerSection.classList.toggle('hidden')
  }

}