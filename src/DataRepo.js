export default class DataRepo {
  constructor() {
    this.travelers;
    this.trips;
    this.destinations
  }

  async getData(data) {
    const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/'
    
    const response = await fetch(url + `${data}/${data}`)
    const json = await response.json()
    return json;
  }

  async getAllData(){
    let travelers = await this.getData('travelers');
    let trips = await this.getData('trips')
    let destinations = await this.getData('destinations')
    this.travelers = travelers.travelers;
    this.trips = trips.trips;
    this.destinations = destinations.destinations;
  }

}
