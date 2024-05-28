
// Problem
// You have two functions that work the same but one diffrenent and largerly incompatible

// Solution\
// Generalize their behaviour using generic



const isAllowed  =<Obj extends {}>(obj : Obj , key : string | number | symbol) : key is keyof Obj=>{
    return key in obj; 
}

const langs = {
    en : 'english',
    mm : 'myanmar',
    fr : 'french'
}

isAllowed(langs,'en')


const media = {
    video : 'video/mp4',
    audio : 'audio/mp3',
    image : 'image/jpg'
}

isAllowed(media,'')