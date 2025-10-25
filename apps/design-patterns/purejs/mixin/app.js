// “A reusable chunk of behavior or code that you can mix into something else.”

// Mixin Pattern is a way to add behavior to a class without using inheritance.




class Dog {
      constructor(name){
        this.name = name
      }
}


const dogFunctions = {
      bark () {
         console.log(`${this.name} is barking`)
      },
      sleep () {
        console.log(`${this.name} is sleeping`)
      }
}

const otherFunction = {
      eat(){
         console.log(`${this.name} is eating`)
      }
}

Object.assign(dogFunctions, otherFunction)
Object.assign(Dog.prototype, dogFunctions)

const dog = new Dog("Buddy")
dog.bark()
dog.sleep()
dog.eat()
