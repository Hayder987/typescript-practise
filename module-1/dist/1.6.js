"use strict";
{
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 6);
    const addArrow = (num1, num2 = 10) => num1 + num2;
    addArrow(2, 6);
    const user3 = {
        name: "hayder",
        age: 30,
        balance: 2,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    console.log(user3.addBalance(6));
    const arr3 = [2, 4, 6];
    const multi = arr3.map((item) => item * item);
    console.log(multi);
}
