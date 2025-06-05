import { Router } from "express";
import {createOrder, fetchPayment} from "./payment.controller";
import { userGuard } from "../middleware/guard.middleware";
const  PaymentRouter = Router()

PaymentRouter.get('/',fetchPayment)
PaymentRouter.post('/order',userGuard,createOrder)

export default PaymentRouter