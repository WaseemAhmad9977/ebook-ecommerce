import { Router } from "express";
import {createEbook, deleteEbook, fetchEbook, updateEbook} from "./ebook.controller";
const  EbookRouter = Router()

EbookRouter.get('/',fetchEbook)
EbookRouter.post('/',createEbook)
EbookRouter.put('/',updateEbook)
EbookRouter.delete('/',deleteEbook)

export default EbookRouter