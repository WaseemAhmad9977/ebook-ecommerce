import { Router } from "express";
import {createEbook, deleteEbook, fetchEbook, updateEbook} from "./ebook.controller";
const  EbookRouter = Router()

EbookRouter.get('/',fetchEbook)
EbookRouter.post('/',createEbook)
EbookRouter.put('/:id',updateEbook)
EbookRouter.delete('/:id',deleteEbook)

export default EbookRouter