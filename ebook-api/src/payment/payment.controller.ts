import Razorpay from "razorpay"
import PaymentModel from "./payment.model"
import {Request,Response} from 'express'
import Exc from "../util/exc.util"

export const fetchPayment = (req:Request,res:Response)=>{

	res.send('hello Developer')

}

const instance = new Razorpay({
	key_id:process.env.RZ_KEY as string,
	key_secret:process.env.RZ_SECRET as string
})


export const createOrder = Exc(async(req:Request,res:Response)=>{
	const order =await instance.orders.create({
		amount:5000,
		currency:'INR',
		receipt:`ebook${Date.now()}`
	})
	res.json(order)
})
