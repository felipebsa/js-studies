// variables and data types
const name = "felipe"
const age = 16
const student = true
console.log(typeof name, typeof age, typeof student)

// objects
const person = { name: "felipe", age: 16 }
console.log(person)

// functions and template literals
function greet(name) {
    console.log(`ola ${name}`)
}
greet("felipe")

// arrays
const fruits = ["orange", "banana", "apple"]
fruits.push("watermelon")

// for...of loop
for (let fruit of fruits) {
    console.log(fruit)
}