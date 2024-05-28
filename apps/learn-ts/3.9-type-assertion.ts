// Problem
// Your code produces the correct results, but the types are way too wide. You
// know better!

// Solution
// Use type assertions to narrow to a smaller set using the as keyword,
// indicating an unsafe operation.


//UNSAFE


type Dice = 1 | 2 | 3 | 4 | 5 | 6 

function genFace (dice: number){
    let num = Math.floor(Math.random() * 6) + 1;
    return num as Dice;  
}


// In assertion , Typescript won't allow to switch sets  eg. number to string

function genFace2 (dice: number){
    let num = Math.floor(Math.random() * 6) + 1;

    //  won't allow to switch string
    return num as string;  
}

type Person = {
    name : string;
    age : number
}

function createPerson (){
    const person = {} as Person;
    person.name ='mggmg'
    return person;
}