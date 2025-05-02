

{

    type userType = {
        name:string,
        age:number,
        isMarried:boolean,
        cgpa:number
    }

    const user1 = {
        name:"hayder",
        age:30
    }

    const user2 ={
        cgpa: 3.64,
        age:33,
        isMarried:false,
    }

    const user:userType ={
        ...user1,
        ...user2
    }

    console.log(user)
}