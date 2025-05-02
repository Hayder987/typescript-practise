

const user : {
    name:string,
    age:number,
    cgpa? : number
    isMarried:boolean
} =
{
name:'hayder',
age:30,

isMarried: false
}

const user2 : {
    readonly name:string,
    age:number,
    isMarried:boolean
} =
{
name:'hayder',
age:30,
isMarried: false
}

// user2.name = "rakib"