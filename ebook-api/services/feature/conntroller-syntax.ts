import camelCase from "./case"
const controllerSyntax = (feature:string)=>{
    const name = camelCase(feature)

    return [
        `import ${name}Model from "./${feature}.model"`,
        `import {Request,Response} from 'express'\n`,
        `export const fetch${name} = (req:Request,res:Response)=>{\n`,
        `\tres.send('hello Developer')\n`,
        `}\n`,
        
    ]
}

export default controllerSyntax