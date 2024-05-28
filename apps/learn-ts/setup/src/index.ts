import { Person } from "../@types/person"

let hello = "welcome to typescript"

// hello = 3

const greete= ()=>{
      console.log("Hello I am greeting to you !")
}

const whoIsHe = (person:Person)=>{
     console.log(person.name)
}

whoIsHe({
    name: "John",
    age: 30
})

console.log("Hello ")
greete()