{
 
    // type Student = {
    //     name:'hayder' | "rakib"
    // }

    // const student1:Student = {
    //     name:"hayder"
    // }


    type Student1 = {
        name:'hayder' | "rakib"
    }

    type Student2 = {
        age:30 | 50 | 32,
        cgpa : number
    }

    type Student = Student1 & Student2;

    const myName: Student = {
      name:'rakib',
      age: 30,
      cgpa: 30
    }

    console.log(myName)


}