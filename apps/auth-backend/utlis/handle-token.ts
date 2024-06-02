import jwt from 'jsonwebtoken'
const JWT_SECRET  ='auth'

export const generateToken = (payload : Record<string,any> , accessToken : boolean = true)=>{

    return jwt.sign(payload,JWT_SECRET, {
        expiresIn : accessToken ?'2m' :'5h'
    })
     
}


// automaticall throw errror if token is expired
export const decodeToken = (token : string)=>{
    return jwt.verify(token , JWT_SECRET)
}