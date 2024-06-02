
import { Request , Response  ,  NextFunction} from "express"
function globalErrorHandler (err : Error, req : Request, res : Response, next : NextFunction) {
   
    res.statusCode = 500;
    return res.json({ 
        message: err.message,
        stack: err.stack,
        error: err,
      });
 
  }

  export default globalErrorHandler