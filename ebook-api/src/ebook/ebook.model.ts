import {Schema,model} from 'mongoose'

const ebookSchema = new Schema({
	title:{
        type:String,
        lowercase:true,
        trim:true,
        required:true
    },
    description:{
        type:String,
        lowercase:true,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    }
},{timestamps:true})

const ebookModel = model('ebook',ebookSchema)
export default ebookModel