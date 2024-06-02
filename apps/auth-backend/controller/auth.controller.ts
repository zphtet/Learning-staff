import express from "express";
import { loginHandler, registerHandler  , refreshTokenHandler, logoutHandler, forgotPasswordHandler, updatePasswordHandler} from "./auth.service";
import verifyToken from "../middleware/verify-token";

const AuthRouter = express.Router();


AuthRouter.post('/register', registerHandler)

AuthRouter.post('/login',loginHandler)

AuthRouter.get('/me',verifyToken , (req,res)=>{
      return res.json(req.body.user)
} )
AuthRouter.get('/refresh-token', refreshTokenHandler)

AuthRouter.post('/logout', logoutHandler)

AuthRouter.post('/forgot-password', forgotPasswordHandler)

AuthRouter.post('/update-password', updatePasswordHandler)

export default AuthRouter;