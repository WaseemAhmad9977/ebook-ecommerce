import {Schema,model} from 'mongoose'

const ebookSchema = new Schema({
	
},{timestamps:true})

const ebookModel = model('ebook',ebookSchema)
export default ebookModel