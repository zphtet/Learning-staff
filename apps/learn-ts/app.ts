// @ts-check

let a_number = 2;



//Accessing  object key
type Person = {
    name: string;
    age: number;
    };

function printPerson(person: Person) {
    for (let key in person) {
    console.log(`${key}: ${person[key as keyof Person]}`);
  
    }
}


//  Difference Between Any and Unknown

let me : any  = 1;
let one  : string  = me;
let two : number = me


let me2  : unknown ='window'
let one2  : string  = me2;
let number : number = me2;


// Discriminated Union

type Cricle = {
    radius : number
    // to distinguish
    kind : 'circle'
}
type Rectangle = {
      x : number;
      y : number;
      kind : 'rectangle'
}

type  Square = {
    x  : number;
    kind : 'square'
}
  
function assertNever (input : never){
     console.log(input)
}
function calcArea (area : Cricle | Rectangle | Square ){
     if(area.kind==='circle'){

        return;
         
     }
     if(area.kind==='rectangle'){
         
        return;
     }
     if(area.kind==='square'){

        return;
         
     }
     assertNever(area)   
}


