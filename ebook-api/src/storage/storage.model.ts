import {Schema,model} from 'mongoose'

const storageSchema = new Schema({
	
},{timestamps:true})

const storageModel = model('storage',storageSchema)
export default storageModel