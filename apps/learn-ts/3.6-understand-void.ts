
//Embrace Void as substitutable type for callbacks

// Void - gurante that to return undefined
//  Void - always excutes expression next to it;
// Void -- subtype of undefined in typescript

function iHaveNoReturnValue (input : number){
    console.log(input)
}

let val = iHaveNoReturnValue(3);
const valType = typeof val

type Fn =typeof iHaveNoReturnValue


function fetchSome (callback : (statusCode : number , data : number[]) => void) {
    
    callback(1,[2]);
}


function c1 (code : number , data : number[]){
    return true;
}

function c2 (code : number){
     return false
}

fetchSome(c1)
fetchSome(c2)

// The power lies within the calling function, which knows best what to expect
// from the callback function. And if the calling function doesn’t require a
// return value at all from the callback, anything goes!