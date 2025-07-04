import express, { Request, Response } from 'express';
import globalErrorHandler from './middleware/globalErrorHandler';
import userRouter from './user/userRouter';
import foodItemRRouter from './foodItems/foodItemRouter';

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.get('/',(req: Request , res: Response)=>{
    const statusCode = 200;
    res.status(statusCode).json({
        status: statusCode,
        message: "Welcome to API"
    }) 
})

app.use('/api/users', userRouter);
app.use('/api/food', foodItemRRouter);

app.use(globalErrorHandler)

export default app;