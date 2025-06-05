import ebookModel from "./ebook.model"

import {Request,Response} from 'express'
import Exc from "../util/exc.util"

export const fetchEbook = Exc(async (req:Request,res:Response)=>{
     const ebook= await ebookModel.find()
	 res.json(ebook)
})

export const createEbook = Exc(async (req:Request,res:Response)=>{
    setTimeout(async () => {
		const ebook = new ebookModel(req.body)
		await ebook.save()
		res.json(ebook)
	},5000);
})


export const updateEbook = Exc(async (req:Request,res:Response)=>{
	const id = req.params.id
	if(!id)
		return res.status(404).json({message:'product not found'})
		setTimeout(async () => {
			const ebook = await ebookModel.findByIdAndUpdate(id,req.body,{new:true})
		    res.json(ebook)
		}, 5000);
})

export const deleteEbook = Exc(async (req:Request,res:Response)=>{
	const id = req.params.id
	if(!id)
		return res.status(404).json({message:'product not found'})

	const ebook= await ebookModel.findByIdAndDelete(id)
	res.json(ebook)
})

