{
// Abstraction in OOP
// -----intense Abstraction---------
interface Vehicle1 {
    startEngine():void;
    stopEngine(): void;
    move(): void;
}

class Car implements Vehicle1{
    startEngine(): void {
        console.log(`i am start engine`)
    }
    stopEngine(): void {
        console.log(`i am stop engine`)
    }
    move(): void {
        console.log(`i am moving car`)
    }
    test(){
        console.log(`i am just testing`)
    }
}

const car1 = new Car()

car1.startEngine()


// -----abstract abstraction class

abstract class Car2 {
   abstract startEngine(): void 
   abstract stopEngine(): void
   abstract move(): void 
    test(){
        console.log(`i am just testing`)
    }
}

class ToyoytaCar extends Car2{
    startEngine(): void {
        console.log(`i am start engine`) 
    }
    stopEngine(): void {
        console.log(`i am stop engine`)
    }
    move(): void {
        console.log(`i am moving the car`)
    }
}

const car2 = new ToyoytaCar();
car2.move()



}