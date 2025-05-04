{
// access Modifier
 
// --------private use --------------->
// class BankAccount {
//     constructor(public readonly id:number, public name:string, private  _balance:number ){

//     }
//     addBalance (num:number){
//         this._balance = this._balance + num
//     }
// }

// const goribAccount = new BankAccount(1, "hayder", 25)

//  goribAccount.addBalance(0)

// console.log(goribAccount);



// --------protected use ---------------------------->
class BankAccount {
    constructor(public readonly id:number, public name:string, protected  _balance:number ){

    }
    addBalance (num:number){
        this._balance = this._balance + num
    }
};

class StudentAcount extends BankAccount {
    constructor( id:number, name:string, _balance:number){
        super(id, name, _balance)
    }
   test(){
    const result = this._balance
    console.log(result)
   }
}

const goribAccount = new BankAccount(1, "hayder", 25);
const myAccount = new StudentAcount(2, "rakib", 120)

 goribAccount.addBalance(0)
 myAccount.test()

console.log({goribAccount, myAccount})



}