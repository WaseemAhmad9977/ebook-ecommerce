import {Schema,model} from 'mongoose'

const paymentSchema = new Schema({
	
},{timestamps:true})

const paymentModel = model('payment',paymentSchema)
export default paymentModel