// console.log("this is factory pattern");
// use Factory Functions to crate new objects


// A function is a factory function if it returns a new object without using NEW Keyword


const createPerson = (name , age)=>{
      return {
            name ,
            age
      }
}

const person = createPerson("John" , 30)
// console.log(person)

const person2 = createPerson("Jane" , 25)
// console.log(person2)

// this  pattern can be use when we create relatively complex and configurable objects



const createObjectFromArry = ([ key , value])=>{
      return {
            [key] : value
      }
}

const obj = createObjectFromArry(["name" , "John"])
console.log(obj)