

export const wait = (sec : number) =>{
    return new Promise((res,_)=>{
         setTimeout(()=>{
            res('finsihed waiting')
         }, sec * 1000)
    })
}