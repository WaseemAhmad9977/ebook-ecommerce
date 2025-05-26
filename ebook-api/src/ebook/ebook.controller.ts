import ebookModel from "./ebook.model"
import EbookModel from "./ebook.model"
import {Request,Response} from 'express'
import Exc from "../util/exc.util"

export const fetchEbook = Exc(async (req:Request,res:Response)=>{
     const ebook = new ebookModel(req.body)
	 await ebook.save()
	 res.json(ebook)
})

export const createEbook = (req:Request,res:Response)=>{

	res.send('hello Developer')

}


export const updateEbook = (req:Request,res:Response)=>{

	res.send('hello Developer')

}

export const deleteEbook = (req:Request,res:Response)=>{

	res.send('hello Developer')

}

