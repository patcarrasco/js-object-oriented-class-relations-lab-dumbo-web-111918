// start ID counters
let driverId = 0
let passengerId = 0
let tripId = 0

const store = {drivers: [], passengers:[], trips:[]}


// create Driver class
class Driver {

  constructor(name) {
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(t => t.driverId === this.id)
  }

  passengers() {
    let passengerArr = []
    let ids = this.trips().map(t => t.passengerId)
    ids.forEach(id => {
      passengerArr.push(store.passengers.find(p => p.id === id))
    })
    return passengerArr
  }

}



// create Passenger class
class Passenger {
  constructor(name) {
    this.name = name
    this.id = passengerId++
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(t => t.passengerId === this.id)
  }

  drivers() {
    let driverArr = []
    let ids = this.trips().map(t => t.driverId)
    ids.forEach(id => {
      driverArr.push(store.drivers.find(d => d.id === id))
    })
    return driverArr
  }
}

// create Trip class
class Trip {
  constructor(driver, passenger) {
    this.id = tripId++
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(d => d.id === this.driverId)
  }

  passenger() {
    return store.passengers.find(p => p.id === this.passengerId)
  }
}
