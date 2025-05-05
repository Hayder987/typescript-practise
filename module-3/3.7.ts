{
// statics

class Counter {
   static count : number = 0;
  
   static increment(){
     return Counter.count = Counter.count + 1
    }
  
   static decrement(){
      return Counter.count = Counter.count - 1
     }
  }
  
//   const increment1 = new Counter();
//   const increment2 = new Counter()
  
  console.log(Counter.increment());
  console.log(Counter.increment())
  console.log(Counter.increment())
  console.log(Counter.decrement())

  



// class Counter {
//   count : number = 0;

//   increment(){
//    return this.count = this.count + 1
//   }

//   decrement(){
//     return this.count = this.count - 1
//    }
// }

// const increment1 = new Counter();
// const increment2 = new Counter()

// console.log(increment1.increment());
// console.log(increment1.increment())

// console.log(increment2.increment())










}