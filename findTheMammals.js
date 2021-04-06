/* Given an array containing a list of animal objects, return a new array containing only the animals which are mammals. Each animal object contains an animal name (i.e. dog or snake) and a value, mammal, which is a boolean indicating whether the animal is a mammal. */

const animals = [
  {
    type: 'Dog',
    mammal: true
  },
  {
    type: 'Snake',
    mammal: false
  },
  {
    type: 'Cheetah',
    mammal: true
  }
]

const findTheMammals = (animalArr) => {
  // filter through the animal array to just animals that have a property of mammal = true
  const mammalArr = animalArr.filter((animal) => animal.mammal )
  return mammalArr;
}

// time complexity 0(n) where n = length of animals

console.log(findTheMammals(animals))