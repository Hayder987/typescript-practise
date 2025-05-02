{
    // interface

    type User1 = {
        name : string,
        age : number
    }

    type ExtendUser = User1 & {roll:number}

    interface User2 {
        name : string,
        age : number
    }

    interface ExtendUser2 extends User2 {roll: number}

    const user1 : ExtendUser2 = {
        name: "hayder",
        age : 30,
        roll : 21
    }

    type Arr1 = number[];

    const arr1:Arr1 = [1, 2, 1]

    interface Arr2  {
        [index:number] : string
    }

    const arr2:Arr2 = ["1", "2", "3"];

    type Add1 = (num1:number, num2:number)=> number

    const add1:Add1 = (num1, num2)=>{
       return num1 + num2
    }

    interface Add2 {
        (num1:number, num2:number) : number
    }

    const add2:Add2 = (num1, num2)=>{
        return num1 + num2
     }

     console.log(add2(2, 4))

}