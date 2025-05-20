import { readFile, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import camelCase from './case'
const endpointSetup = (feature:string)=>{
     console.log(feature)
    const name = camelCase(feature)
    const root = process.cwd()
    const serverFile = path.join(root,'src','index.ts')
    console.log(serverFile)
    const content = readFileSync(serverFile,'utf-8')
    const array = content.split('\n')
    // const ui:string [] = []
    // for(let item of data)
    // {    
    //     ui.push(item)
    //     if(item === '//Routes\r')           
    //        ui.push(`import ${name}Router from './${feature}/${feature}.routes'`)
    // }
    array.push(`import ${name}Router from './${feature}/${feature}.routes'`)
    array.push(`app.use("/${name}",${name}Router)`)
    writeFileSync(serverFile,array.join("\n"))
    console.log(array)
    return true
}
export default endpointSetup