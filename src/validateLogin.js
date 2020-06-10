import {Traveler, UserTypeTraveler} from './Traveler'
import {Agency, UserTypeAgency} from './Agency'

const validateLogin = async (username, password) => {
  let isPassword = password === "travel2020"
  let id = getId(username);
  if(typeof id === "number") {
    let exists = await ifExists(id)
    if(!exists) return null;
  }
  if(isPassword && id != null) {
    if(id === 'agency') {
      return new Agency()
    } else {
      let traveler = new Traveler(await travelerData(id))
      return traveler
    }
  }
}

const getId = (username) => {
  let id = username.includes('agency') ? 'agency' : parseInt(username.slice(8))
  return id ? id : null
}

const ifExists = async (id) => {
    const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/'
    const response = await fetch(url + id)

    return response.status === 200
}
const travelerData = async (id) => {
    const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/'
    const response = await fetch(url + id)
    const json = await response.json()

    return json
}
export default validateLogin