// STEP 1
function Cat() {}
const Dog = function () {}

// STEP 2
const firstCat = new Cat()
const firstDog = new Dog()

// STEP 3
// class Animal {
//     constructor() {
//         console.log(`The animal has been created.`)
//     }
// }
// const firstAnimal = new Animal()

// STEP 4
// class Animal {
//     constructor(species, color) {
//         this.species = species
//         this.color = color
//         console.log(`The ${this.color} ${this.species} has been created.`)
//     }
// }
// const firstAnimal = new Animal('Hummingbird','Blue')

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//         console.log(`Type: ${this.type} 
//         Breed: ${this.breed}
//         Color: ${this.color}
//         Height: ${this.height}
//         Length: ${this.length}
//         The new animal has been created.`)
//     }
// }
// const firstAnimal = new Animal('Bird','Hummingbird','Blue','3','6')

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }

// }
// const firstAnimal = new Animal('Bird','Hummingbird','Blue','3','6')

// for (const prop in firstAnimal) {
//     console.log(`${prop}`)
// }

// STEP 7
// class Animal {
//     constructor(breed) {
//         this.breed = breed
//     }
//     speak = () => {
//         if (this.breed == 'dog') {
//             console.log(`${this.breed} has barked!`)
//         } else {
//             console.log(`${this.breed} has meowed!`)
//         }
//     }
// }
// const firstAnimal = new Animal('cat')
// firstAnimal.speak()

// // STEP 8
// function Animal (breed) {
//     let _breed = breed
//     let checkType = function () {
//         if (_breed == 'dog') {
//             console.log(`${_breed} has barked!`)
//         } else {
//             console.log(`${_breed} has meowed!`)
//         }
//     }
//     this.speak = function () {
//         checkType()
//     }
// }
// const firstAnimal = new Animal('dog')
// firstAnimal.speak()

// STEP 9
function findWords () {
    let text = 'the quick brown fox jumps over the lazy dog the'
    let numOfWords = text.match(/the/g)
    console.log(`${numOfWords.length}`)
}
findWords()
