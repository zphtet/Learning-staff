
// Narrowing Types with type predicates

type Dice = 1 | 2 | 3 | 4 | 5 | 6 


// It need to be narrower than the original type
function isDice (val : number) : val is Dice{
    return [1,2,3,4,5,6].includes(val)
}
function rollDice (input:number){
     
    if(isDice(input)){
        console.log(input)
        return;
    }
    console.log(input)
    return;
}

// From external API 
// You should assert type     ->   fetch() as Person[]