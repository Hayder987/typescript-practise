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
}