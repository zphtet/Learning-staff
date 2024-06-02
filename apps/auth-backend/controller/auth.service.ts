import bcrypt from 'bcrypt';
import {NextFunction, Request , Response} from 'express'
import {  LoginUser, RegisterUser } from '../@types';
import prisma from '../prisma/client';
import catchAsync from '../utlis/catchAsync';
import { generateToken } from '../utlis/handle-token';
import {v4 as uuidv4} from 'uuid'

// Register Hanlder
export const registerHandler = catchAsync(async (req : Request, res: Response)=> {
    const body = req.body as RegisterUser;

    const hashPassowrd = await bcrypt.hash(body.password , 12)

    const user = await prisma.user.create({
       data : {
         ...body,
         password : hashPassowrd
       }
    })

    const {password , ...resUser} = user;
    
    res.json({
    data : resUser
    })
 
})


export const loginHandler = catchAsync(async (req : Request, res: Response , next : NextFunction)=> {
     
    const body = req.body as LoginUser
    const user = await prisma.user.findUnique({
        where : {
            email : body.email
        }
    })

    if(!user){
       return next(new Error('User with that email not exist'))
    }

    const isMatch = await bcrypt.compare(body.password, user.password)
    if(!isMatch){
         throw new Error('Password incorrect')
    }

    // genearate access token
     const accessToken = generateToken({id : user.id})

     // generate refresh token
     const refreshToken = generateToken({id : user.id},false)

    //  Save to db
     await prisma.session.create({
        data : {
            user_id : user.id,
            token : refreshToken
        }
     })
     console.log("saved token to db")

     //  Set Access Token to Cookie
     res.cookie('access_token', accessToken, {
        httpOnly : true
     })

    //  Set Refresh Token to Cookie
     res.cookie('refresh_token', refreshToken , {
        httpOnly : true
     })
     
    const {password,...resUser} = user;

    return res.json({
        accessToken : accessToken,
        data : resUser
    })

})



export const refreshTokenHandler = catchAsync(async (req : Request , res : Response , next: NextFunction)=>{
    console.log("refresh token route")
       const refreshToken = req.cookies.refresh_token;
       if(!refreshToken){
           return next(new Error('Refresh token not found'))
       }

       console.log("refresh token from cookies" , refreshToken)

       const sessionExist = await prisma.session.findUnique({
         where : {
            token : refreshToken,
            active : true
         }
       })

       if(!sessionExist){
         return next(new Error('Session do not exist'))
       }
 
        const user = await prisma.user.findUnique({
            where : {
                id : sessionExist.user_id
            }
        })

        if(!user){
            return next(new Error('User do not exist'))
        }

        const accessToken = generateToken({id : user.id})

        res.cookie('access_token', accessToken, {
            httpOnly : true
        })

        const {password,...resUser} = user;

        return res.json({
            accessToken : accessToken,
            data : resUser
        })
       
})


export const logoutHandler = catchAsync(async (req : Request , res : Response , next: NextFunction)=>{
     
    const refreshToken = req.cookies.refresh_token;
    
    await prisma.session.delete({
        where : {
            token : refreshToken
        }
    })

    res.clearCookie('refresh_token', {
        httpOnly: true,    
    })
    return res.json({
        message : 'Logout successfully'
    })
})


export const  forgotPasswordHandler = catchAsync(async(req , res , next )=>{
        const email = req.body.email;
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })

        if(!user){
            return next(new Error('User with that email not exist'))
        }
     
    //    send email
    const rdmId = uuidv4();

    //  save to db
       await prisma.resetToken.create({
             data : {
                 resetId: rdmId,
                 email,
             }
       })

    // send email

    return res.json({
        message : 'Password reset email was sent successfully',
         resetId : rdmId
    })
})


export const updatePasswordHandler = catchAsync(async (req: Request, res : Response , next : NextFunction)=>{
     
        const body = req.body as {
            resetId : string,
            password : string
        }

        if(!body.resetId){
             return next(new Error('Reset id not found'))
        }

        const resetToken = await prisma.resetToken.findUnique({
            where : {
                resetId : body.resetId
            }
        })

        if(!resetToken){
            return next(new Error('Reset token not found'))
        }

        const user = await prisma.user.findUnique({
            where : {
                email : resetToken.email
            }
        })

        if(!user){
            return next(new Error('User not found'))
        }

        const hashPassword = await bcrypt.hash(body.password, 12)

        await prisma.user.update({
            where : {
                id : user.id
            },
            data : {
                password :  hashPassword
            }
        })

        await prisma.resetToken.delete({
            where : {
                resetId : body.resetId
            }
        })

        return res.json({
            message : 'Password changed successfully',
        })
})