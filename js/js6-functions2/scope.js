// ? =================================
// ?          SCOPE
// ? =================================
console.log("******* SCOPE ********");

let number1 = 3 //? Global
let number2 = 5 //? Global
console.log(number1); //3


const funk1 = () => {
    number1 = 44 // ? Global deiskene atama yapildi
    let number2 = 7 //? Local (block-scoped) deisken
}

funk1()

console.log(number1); //? 4
console.log(number2); //? 5

console.log(esram);