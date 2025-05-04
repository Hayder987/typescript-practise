{
    // type guard in
 
    // ----typeof----------
    type AlphaNumeric = string | number
    const add =(num1 : AlphaNumeric, num2 : AlphaNumeric) : AlphaNumeric=>{
         if(typeof num1 === "number" && typeof num2 ==="number"){
            return num1 + num2;
         }
         else{
            return num1.toString() + num2.toString()
         }
    }

    const result1 = add(2, 3)
    const result2 = add(2, "3")
    // console.log({result1, result2})

//   ------in ----------------

type NormalUser ={
    name: string
}

type AdminUser = {
    name: string,
    role: "admin"
}

const checkUser =(user: NormalUser | AdminUser)=>{
    if("role" in user){
        console.log(`I am ${user.name} and i am ${user.role}`)
    }
    else{
        console.log(`I am ${user.name}`)
    }
}

const normal:NormalUser = {
  name:"hayder"
}

const admin : AdminUser = {
    name: "rakib",
    role : "admin"
}

//  checkUser(normal);
//  checkUser(admin);













}