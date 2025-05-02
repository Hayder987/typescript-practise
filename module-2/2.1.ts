{

// let data : any ;
//  data = "hayder";

// const result = (data as string).length
// console.log(result)


const kgToGm = (value: number | string | undefined) : number | string | undefined =>{
   if(typeof value === "string"){
    const result = parseFloat(value)*1000
    return `The Value Is : ${result}`
   }
   if(typeof value === "number"){
    const result = value*1000
    return result
   }
}

const result1 = kgToGm(5) as number
const result2 = kgToGm("6") as string

console.log(result1, result2)

type ErrMessage = {
    message: string
}

try{

}
catch(err){
    console.log((err as ErrMessage).message)
}

}

