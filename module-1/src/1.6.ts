{

function add (num1:number, num2:number):number{
    return num1 + num2
}

add(2, 6)

const addArrow = (num1:number, num2:number=10) : number=> num1 + num2

addArrow(2, 6);



const user3 = {
    name: "hayder",
    age: 30,
    balance: 2,
    addBalance(balance: number): number {
      return this.balance + balance
    },
  };
  
  console.log(user3.addBalance(6));

  const arr3:number[] = [2, 4, 6]

  const multi:number[] = arr3.map((item:number) : number=> item*item);
  console.log(multi)




}