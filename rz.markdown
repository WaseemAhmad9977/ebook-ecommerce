1.install razorpay 
2.assign new instance like this 
const instance = new Razorpay({
	key_id:process.env.RZ_KEY as string,
	key_secret:process.env.RZ_SECRET as string
})

after that create order like this
export const createOrder = Exc(async(req:Request,res:Response)=>{
	const order =await instance.orders.create({
		amount:5000,
		currency:'INR',
		receipt:`ebook${Date.now()}`
	})
	res.json(order)
})

both code should be in paymemt controller