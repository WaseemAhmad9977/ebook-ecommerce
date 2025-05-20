import CategoryModel from "./category.model"
import Exc from "../util/exc.util"
import {Request,Response} from 'express'
import categoryModel from "./category.model"

export const fetchCategory =Exc( async (req:Request,res:Response)=>{
    const category = await categoryModel.find()
	res.json({category})
	// res.send('hello Developer')

})

export const createCategory=Exc(async (req:Request,res:Response)=>{
     const category = new categoryModel(req.body)
	 await category.save()
	 res.json({
		category
	 })
})

export const updateCategory=Exc(async (req:Request,res:Response)=>{
    const id = req.params.id
	const data = req.body
    const category = await categoryModel.findByIdAndUpdate(id,data,{new:true})

	if(!category)
		return res.status(404).json({
	           message:'category not found'
		})

	res.json(category)

})


export const deleteCategory=Exc(async (req:Request,res:Response)=>{
    const id = req.params.id
	const category = await categoryModel.findByIdAndDelete(id)
	
	if(!category)
		return res.status(404).json({
	           message:'category not found'
		})

	return res.status(200).json({
	           message:'deleted Succesfully'
		})
})

