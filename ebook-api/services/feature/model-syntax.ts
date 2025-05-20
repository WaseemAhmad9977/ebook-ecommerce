
const modelSyntax = (name:string)=>{
 
  return [
     `import {Schema,model} from 'mongoose'\n`,
     `const ${name}Schema = new Schema({`,
       `\t`,
     '},{timestamps:true})\n',
     `const ${name}Model = model('${name}',${name}Schema)`,
     `export default ${name}Model`
  ]
}
export default modelSyntax;
