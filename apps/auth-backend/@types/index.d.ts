import { User } from "@prisma/client";
type RegisterUser = Omit<User,'id'>;
type LoginUser = Omit<User ,'id' | 'name'>

type DecodeUserToken = {
    id : string;
    iat : number;
    exp : number
}