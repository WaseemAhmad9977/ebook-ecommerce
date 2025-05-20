import { existsSync, mkdir, mkdirSync, writeFileSync } from 'fs'
import logger from 'node-color-log'
import path from 'path'
import modelSyntax from './model-syntax'
import camelCase from './case'
import controllerSyntax from './conntroller-syntax'
import routerSyntax from './router-syntax'
import endpointSetup from './endpoint'

// const feature = process.argv.slice(2).join('-').toLowerCase() -->one lionner
const argsArray = process.argv.slice(2)
const args = argsArray.map((items)=>items.toLowerCase())
const feature = args.join("-")
// console.log(feature)
// console.log(x)
const root = process.cwd()
// console.log(root)

const folder = path.join(root,'src',feature)
// console.log(folder)


const featureService=()=>{
    try {
        if(existsSync(folder))
            return logger.error("services already exist")
        mkdirSync(folder)
        
        //modelsyntaxWrite
        writeFileSync(path.join(folder, `${feature}.model.ts`), modelSyntax(feature).join('\n'))

        //controller syntax  write
         writeFileSync(path.join(folder, `${feature}.controller.ts`),controllerSyntax(feature).join('\n'))

        //router syntax
         writeFileSync(path.join(folder, `${feature}.routes.ts`),
         routerSyntax(feature).join("\n"))

         endpointSetup(feature)

         writeFileSync(path.join(folder, `${feature}.interface.ts`), '//interface')
         logger.success(`${feature} service created`)
    } 
    catch (err:any) {
        logger.error(err.message)
    }
}

featureService()



