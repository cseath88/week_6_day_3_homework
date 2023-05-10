const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Raptor", "Carnivore", 50)
    dinosaur2 = new Dinosaur("Long Neck", "Herbivore", 70)
    park = new Park('Jurassic Park', 60.00)
  })

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 60.00)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [ ])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur("Raptor")
    const actual = park.numberOfDinosaurs()
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur("Raptor")
    park.addDinosaur("T-Rex")
    park.removeDinosaur("Raptor")
    const expected = ['T-Rex']
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.dinoWithMostVisitors()
    assert.strictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const expected = [dinosaur1]
    const actual = park.findDinoBySpecies("Raptor")
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const expected = 120
    const actual = park.totalNumberOfGuests()
    assert.strictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const expected = 43800
    const actual = park.guestsPerYear()
    assert.strictEqual(actual, expected)
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const expected = 2628000
    const actual = park.totalYearlyRevenue()
    assert.strictEqual(actual, expected)
  });

});
