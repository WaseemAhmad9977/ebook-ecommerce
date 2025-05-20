import { Router } from "express";
import {createCategory, deleteCategory, fetchCategory, updateCategory} from "./category.controller";
const  CategoryRouter = Router()

CategoryRouter.get('/',fetchCategory)
CategoryRouter.post('/',createCategory)
CategoryRouter.put('/:id',updateCategory)
CategoryRouter.delete('/:id',deleteCategory)

export default CategoryRouter