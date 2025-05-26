import StorageModel from "./storage.model"
import Exc from "../util/exc.util"
import {Request,Response} from 'express'
import { ListObjectsV2Command,GetObjectCommand,DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import s3 from "../util/s3.utill"


export const fetchStorage = Exc(async (req:Request,res:Response)=>{
	const cmd = new ListObjectsV2Command({
		Bucket:'er-waseem-storage',
		Prefix:process.env.BUCKET_FOLDER
	})

	const data = await s3.send(cmd)
	res.json(data.Contents)
})

export const createFile = Exc(async (req:Request,res:Response)=>{
	res.send('success')
})

export const downloadFile = Exc(async (req:Request,res:Response)=>{
	const {path}=req.body
	const cmd = new GetObjectCommand({
		Bucket:process.env.BUCKET as string,
		Key:path
	})
	const data = await getSignedUrl(s3,cmd,{expiresIn:30})
	res.json({url:data})
})

export const deleteFile = Exc(async (req:Request,res:Response)=>{
	const {path} = req.body
	const cmd = new DeleteObjectCommand({
		Bucket:process.env.BUCKET as string,
		Key:path
	})

	await s3.send(cmd)
	res.json({message:'file deleted'})
})

