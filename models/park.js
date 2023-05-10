const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [ ]
}

Park.prototype.numberOfDinosaurs = function () {
    return this.dinosaurs.length
}


Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}


Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}


Park.prototype.dinoWithMostVisitors = function () {
    let mostPopularDino = null
    let highestVisitors = 0
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highestVisitors) {
            mostPopularDino = dinosaur
            highestVisitors = dinosaur.guestsAttractedPerDay
        }
    }
    return mostPopularDino
}

Park.prototype.findDinoBySpecies = function (species) {
    let dinoSpecies = [ ]
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinoSpecies.push(dinosaur)
        }
    }
    return dinoSpecies
}

Park.prototype.totalNumberOfGuests = function () {
    let totalguests = 0
    for (const dinosaur of this.dinosaurs) {
        totalguests += dinosaur.guestsAttractedPerDay
    }
    return totalguests
}

Park.prototype.guestsPerYear = function () {
    const totalPerDay = this.totalNumberOfGuests()
    const daysInYear = 365
    const yearlyVisitors = totalPerDay * daysInYear
    return yearlyVisitors
}

Park.prototype.totalYearlyRevenue = function () {
    const totalGuests = this.guestsPerYear()
    const revenue = totalGuests * this.ticketPrice
    return revenue
}

module.exports = Park;