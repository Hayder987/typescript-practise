{
    // instance of Guard

    class Animal {
        constructor(public name:string, public species:string){}
        makeSound(){
            console.log(`i can create sound`)
        }
    };

    class Dog extends Animal{
        constructor(name:string, species:string){
         super(name, species)
        }
        makeBark(){
            console.log(`I am Barking Dog`)
        }
    };

    class Cat extends Animal {
        constructor(name:string, species:string){
            super(name, species)
        }
        makeMeaw (){
            console.log(`I am Meaw Cat`)  
        }
    };

    const isDog = (animal:Animal): animal is Dog=>{
       return animal instanceof Dog
    }

    const isCat = (animal: Animal): animal is Cat=>{
        return animal instanceof Cat
    }

    const cheackAnimal = (animal:Animal)=>{
       if(isDog(animal)){
          animal.makeBark()
       } 
       else if(isCat(animal)){
        animal.makeMeaw();
       }
       else{
        animal.makeSound();
       }
    }

    const dog = new Dog('dog vai', "dog");
    const cat = new Cat ('cat vai', "cat");
    const bird = new Animal('pakhi vai', "bird")
    cheackAnimal(dog)















}