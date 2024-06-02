// src/server.ts

import express, { Request, Response } from 'express';
import AuthRouter from './controller/auth.controller';
import bodyParser from 'body-parser';
import globalErrorHandler from './utlis/global-error-handler';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet';
const app = express();
const port = 3000;


// body parser
app.use(helmet())
app.use(bodyParser.json())
app.use(cookieParser())

app.use(
  cors({
    credentials : true,
    origin : ['*']
  })
)


// Define a route for the root URL (/)
app.get('/', (req: Request, res: Response) => {
    // throw new Error("error getting information")
  res.send('<h1>Hello this is Authentication Backend <h1>');
});

app.use('/api',AuthRouter)


// Global Error Handling
app.use(globalErrorHandler)

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
