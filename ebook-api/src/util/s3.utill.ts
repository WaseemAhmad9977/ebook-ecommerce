import { S3Client,ListObjectsV2Command } from "@aws-sdk/client-s3";
const s3 =new S3Client({
    region:'eu-north-1',
    credentials:{
        accessKeyId:process.env.S3_ACCESS_KEY as string,
        secretAccessKey:process.env.S3_SECRET_ACCESS_KEY as string
    }
})
export default s3