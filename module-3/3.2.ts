{
    // oop-inheritance

//     class Person {
//         name : string;
//         age:number;
//         address: string;

//         constructor (name : string, age:number, address: string,){
//           this.name = name;
//           this.age = age;
//           this.address = address;
//         }

//         getSleep(time:number){
//             console.log(`${this.name}  sleep ${time} Hours`)
//         }
//     }

//    class Student extends Person {
//     constructor(name : string, age:number, address: string,){
//      super(name, age, address)
//     }
//    }

//   const rakib = new Student('Rakib', 28, "bd")

//    rakib.getSleep(9)

//   class Teacher extends Person{
//     designation:string;
//     constructor(name : string, age:number, address: string, designation:string){
//         super(name, age, address);
//         this.designation = designation
//     }

//     tekeClass(time:number){
//         console.log(`${this.name}  take Class ${time} Hours`)
//     }
//   }

//   const orin = new Teacher ("orin", 29, "dhaka", "frontend")
//    orin.tekeClass(4)


// type-2 short------------------------->
class Person {
    constructor (public name : string, public age:number, public address: string,){ }

    getSleep(time:number){
        console.log(`${this.name}  sleep ${time} Hours`)
    }
}

class Student extends Person {
constructor(name : string, age:number, address: string,){
 super(name, age, address)
}
}

class Teacher extends Person{
constructor(name : string, age:number, address: string, private designation:string){
    super(name, age, address);
}

tekeClass(time:number){
    console.log(`${this.name}  take Class ${time} Hours`)
}
}

const rakib = new Student('Rakib', 28, "bd")
rakib.getSleep(9)

const orin = new Teacher ("orin", 29, "dhaka", "frontend")
orin.tekeClass(4)

}