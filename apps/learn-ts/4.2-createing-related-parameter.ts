
// Problem

// You write function where second parameter depends on first parameter


//Solution
// Annotate each parameter with generic type and create relateionship through generic constraint


const hasFun  =<Obj extends {}>(obj : Obj , key : keyof Obj) : key is keyof Obj=>{
    return key in obj; 
}

const langss = {
    en : 'english',
    mm : 'myanmar',
    fr : 'french'
}

hasFun(langs,'en')


const medias = {
    video : 'video/mp4',
    audio : 'audio/mp3',
    image : 'image/jpg'
}

hasFun(medias,'video')






const languages = {
     en : URL,
     mm : URL,
     fr : URL,
     de : URL,
     ja : URL,
}

// typeof URL

type URLList = {
     [x : string] : URL,
}

function fetch <List extends {} , Key extends keyof List> (List : List , key: Key[]){
     
     return [key , 'something']
}


const result = fetch(languages , ['de', 'mm'])

type ResultType =typeof result


const val = result[0]
const val2 = result[1]

// function fetchFiles<List extends URLList, Keys extends keyof List>(
//     urls: List,
//     keys: Keys[]
//     ) {
//     const els = keys.map((el) =>
//     fetch(urls[el])
//     .then((res) => res.json())
//     .then((data) => {
//     const entry: [Keys, any] = [el, data];
//     return entry;
//     })
//     );
//     return els;
//     }
//     const de_and_fr = fetchFiles(languages, ["de", "fr"]);