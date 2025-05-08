
{

    const makeUser =<T extends{name:string, age:number}> (user:T)=>{
        const data = "he is Student"
      return{
        ...user,
        data
      }
    }

    const user1 = makeUser({
        name:"hayder",
        age:30,
        isMarried:true
    });

    const user2 = makeUser({
        name:"hayder",
        age:30,
        good:true
    });
    console.log(user1, user2)
  





}
