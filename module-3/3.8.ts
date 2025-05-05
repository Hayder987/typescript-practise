{
    // polymorphism

//    example-1

    class Person {
        getSleep(){
            console.log(`i am sleeping 8 hours`)
        }
    }

    class Student extends Person{
        getSleep(){
            console.log(`i am sleeping 7 hours`)
        } 
    }

    class Developer extends Person {
        getSleep(){
            console.log(`i am sleeping 6 hours`)
        }
    }

    const getSleepingHours = (params: Person)=>{
        return params.getSleep();
    }

   const person1 = new Person();
   const person2 = new Student();
   const person3 = new Developer();
  
//    getSleepingHours(person3)
  

// example-2
 class Shape {
    getArea():number{
        return 0
    }
 };

 class Circle extends Shape{
    constructor(public radius:number){
        super();
    }
    getArea():number{
        return Math.PI * this.radius * this.radius
    }  
 };


 class Rectangle extends Shape{
    constructor(public height:number, public width:number){
        super();
    }
    getArea():number{
        return this.height * this.width;

    }  
 };

 const getArea =(params: Shape)=>{
   return params.getArea();
 }

 const rectangle = new Rectangle(20,10);
 const circle = new Circle (15)

console.log(getArea(rectangle));
console.log(getArea(circle))

}