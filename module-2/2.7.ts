{
// utilites type

type Person = {
    name:string;
    age:number;
    email?:string;
    contactNo : number
}

// Pick
type NameAge = Pick <Person, "name" | "age">

// Omit
type ContactInfo = Omit <Person,  "name" | "age">


// Required 
type AllData = Required <Person>

// Partial

type Optinal = Partial <Person>

// ReadOnly

type NoEdit  = Readonly <Person>

const user1: NoEdit ={
    name:"hayder",
    age:30,
    email: "hayderbd4290@gmail.com",
    contactNo: 1777555
}

// user1.name = "rakib"     ---- can't edit name


// Record

// type Obj ={
//     a: string;
//     b: string
// }

// type RecordObj = Record<string, string>

// const obj1 : RecordObj ={
//     a:'x',
//     b: "y",
//     c: 'l'
// }

type RecordObj = Record<string, unknown>

const obj1 : RecordObj ={
    a:'x',
    b: "y",
    c: 'l',
    d: 25
}









}