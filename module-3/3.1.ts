 {
//  class -oop

// class Car  {
//     name:string;
//     model:string;
//     year: number

//     constructor( name:string, model:string, year: number){
//         this.name = name;
//         this.model = model;
//         this.year = year;
//     }

//     display(){
//         console.log(`the ${this.name} build ${this.year}`)
//     }

// }

//   const bmw = new Car('bmw', "b-258", 2018)
//    bmw.display();


// type-2

class Car  {
    constructor(public name:string, public model:string, public year: number){}

    display(){
        console.log(`the ${this.name} build ${this.year}`)
    }

}

  const bmw = new Car('bmw', "b-258", 2019)
   bmw.display();


   
 }