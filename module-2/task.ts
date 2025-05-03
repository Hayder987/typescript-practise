{
  // task

  // task-1

  const message: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
  // console.log(message)

  // task-2
  // const user = (name:string,age:number, role?:'admin' | 'user' | 'guest')=>{
  //     console.log(name, age);
  //     if(role){
  //         console.log(role)
  //     }
  //     else{
  //         console.log("No Role Found")
  //     }
  // }

  // user("Hayder", 25, "admin");
  // user("Sara", 30)
  type Role = "admin" | "user" | "guest";

  const user = <T, X, Z extends Role | undefined>(
    name: T,
    age: X,
    role?: Z
  ) => {
    console.log(name, age);
    if (role) {
      console.log(role);
    } else {
      console.log("No Role Found");
    }
  };

  // user<string, number, "admin">("Hayder", 25, "admin");
  // user<string, number, undefined>("Sara", 30)

  // task-3

  type person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: {
      frontend: boolean;
      backend: boolean;
    };
    maritalStatus: boolean;
    friends: string[];
  };

  const person1: person = {
    name: "Hayder",
    address: "Dhaka, Bangladesh",
    hairColor: "Black",
    eyeColor: "Brown",
    income: 80000,
    expense: 30000,
    hobbies: ["Coding", "Reading", "Gaming"],
    familyMembers: ["Mother", "Father", "Sister"],
    job: "Web Developer",
    skills: {
      frontend: true,
      backend: true,
    },
    maritalStatus: false,
    friends: ["Asif", "Nadia", "Farhan"],
  };

  //   console.log(person1)

  // task-4

  const reverseSting = (value: string): string => {
    const result = value.split("").reverse().join("");
    return result;
  };

  // console.log(reverseSting("hello"))

  //    task-5

  const sum = (...number: number[]): number => {
    const result = number.reduce((total, num): number => total + num, 0);
    return result;
  };
  //  console.log(sum(1, 2 ,3))

  // task-6
  // const square = (num:number | string)=>{
  //     if(typeof num ==="number"){
  //         return num*2
  //     }
  //     if(typeof num ==="string"){
  //         return `The Length is: ${num.length}`
  //     }

  // }

  // console.log(square("55585"))

  const square = <T extends number | string>(num: T): number | string => {
    if (typeof num === "number") {
      return num * 2;
    }
    if (typeof num === "string") {
      return `The Length is: ${num.length}`;
    }
    return "Invalid input";
  };
  // console.log(square<string>("25"))

  // task-7

  interface User {
    name: string;
    email: string;
  }

  interface Admin {
    adminLevel: number;
  }

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `${user.name} ${user.email} ${user.adminLevel}`;
  };

  const user1: AdminUser = {
    name: "hayder",
    email: "ay@gmail.com",
    adminLevel: 6,
  };

  // console.log(describeAdmin(user1))

  // task-8

  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
  };

  // console.log(getDisplayName(undefined))

  // task-9
  const removeDuplicates = <T>(items: T[]): T[] => {
    const uniqueArray: T[] = [];
    for (const item of items) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    return uniqueArray;
  };

  //  console.log(removeDuplicates(["apple", "banana", "apple"]))

  // task-10
  type Data = {
    userId: number;
    id: number;
    title:string;
    body:string
  };

  const fetchData = async (): Promise<Data> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const data = await res.json();
    return data;
    
  };
   
 const getData = async ()=>{
    const x =await fetchData();
   console.log(x)
 }
//  getData();


//  task-11

const getString = (value:unknown):string =>{
   if(typeof value ==="string"){
    return value.toUpperCase();
   }
   else{
    return "It's Not string"
   }
}

// console.log(getString(25487))

// task-12

type Person ={
    name:string,
    age:number,
    isMarried:boolean
}


const getValue =<T, Q extends keyof T> (obj:T, key:Q):T[Q]=>{
    return obj[key]
}

const person2:Person ={
    name:"hayder",
    age:30,
    isMarried:false
}
const person3:Person ={
    name:"rakib",
    age:30,
    isMarried:false
}

const result1 = getValue(person3, "name").toUpperCase()
console.log(result1)
















}
