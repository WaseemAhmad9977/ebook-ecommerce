import camelCase from "./case"

const routerSyntax = (feature:string)=>{
    const name = camelCase(feature)
    return [
        `import { Router } from "express";`,
        `import {fetch${name}} from "./${feature}.controller";`,
        `const  ${name}Router = Router()\n`,
        `${name}Router.get('/',fetch${name})\n`,
        `export default ${name}Router`
    ]
}

export default routerSyntax