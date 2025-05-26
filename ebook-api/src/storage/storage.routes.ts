import { Router } from "express";
import {downloadFile, fetchStorage} from "./storage.controller";
import s3 from "../util/s3.utill";
import { createFile } from "./storage.controller";
import {v4 as uniqueId} from 'uuid'
const  StorageRouter = Router()

import multer from 'multer'
import multerS3 from 'multer-s3';

const upload = multer({
  storage:multerS3({
    s3,
    bucket:process.env.BUCKET as string, // this is the bucket name addded in .env file
    key:(req,file,cb)=>{
        const ext=file.originalname.split(".").pop()
        // const arr=file.originalname.split(".")
        // const ext = arr[arr.length-1]
        cb(null,`demo/${uniqueId()}.${ext}`)
    },
    
  })
})

StorageRouter.get('/',fetchStorage)
StorageRouter.post('/', upload.single('file'), createFile);
StorageRouter.post('/download',downloadFile);


export default StorageRouter