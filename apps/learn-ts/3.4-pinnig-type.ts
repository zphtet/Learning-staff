
// Pinning Type with const

let pName = 'mgmg'

const sName = 'aung'





type Circle = {
    radius : number
    // to distinguish
    kind : 'circle'
}
type Rect = {
      x : number;
      y : number;
      kind : 'rectangle'
}

type  Sqre = {
    x  : number;
    kind : 'square'
}
  
function assertNever (input : never){
     console.log(input)
}
function calcArea (area : Circle | Rect | Sqre ){
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

const myR = {
     x : 2,
     y : 2,

    //  const context
    // without const , it cause error
     kind : 'rectangle' as const
}


calcArea(myR)