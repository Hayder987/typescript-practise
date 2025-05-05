{
    // getter and setter

    class BankAccount {
        constructor(public readonly id:number, public name:string, protected  _balance:number ){
    
        }
        // getter

        get Balance ():number{
            return this._balance
        }

        // setter
         set deposite (amount:number){
             this._balance = this._balance + amount
         }
       
    };
    
    
    const goribAccount = new BankAccount(1, "hayder", 25);
    goribAccount.deposite = 50
     
    const balance = goribAccount.Balance;
    console.log(balance)
    

}