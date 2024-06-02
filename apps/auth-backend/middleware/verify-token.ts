import catchAsync from "../utlis/catchAsync";
import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utlis/handle-token";
import { DecodeUserToken } from "../@types";
import prisma from "../prisma/client";

const verifyToken = catchAsync(async (req : Request , res : Response , next : NextFunction)=>{
     const token  =  req.headers.authorization?.replace('Bearer ','')
     if(!token){
         throw new Error('Token not found')
     }

     const decoded = decodeToken(token) as DecodeUserToken

     if(!decoded.id){
         return next(new Error('This is not valid token'));
     }

     const user = await prisma.user.findUnique(
        {
            where : {
                id : decoded.id
            }
        }
     )
     if(!user){
          return next(new Error('This is  not a valid user .'));
     }

     req.body.user = user;
     next();
})

export default verifyToken