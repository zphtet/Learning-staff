
// Problem
// You have a type that is related to your model in your application , everytime the model changes , you also change your types


type ToyBase ={
     name : string;
     age : number;
}

type Doll = ToyBase & {
     kind : 'doll'
}

type Car = ToyBase & {
     kind : 'car'
}

type BoardGame = ToyBase & {
     kind : 'boardgame'
}

type Bricks = ToyBase & {
     kind : 'bricks'
}


type Toy = Doll | Car | BoardGame | Bricks


type GroupedToys = {
      [k in Toy['kind']] ?: Toy[]
}

function groupToys (toy : Toy){
     
     const groupedToys : GroupedToys = {}

     groupedToys[toy.kind] = groupedToys[toy.kind] || []
     if(groupedToys[toy.kind]){
         groupedToys[toy.kind]?.push(toy)
     }
     return groupedToys;
}

console.log(groupToys({name : 'hi',age : 12 , kind : 'car'}))