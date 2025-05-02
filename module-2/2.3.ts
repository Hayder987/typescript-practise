{
    // generics

    type GenericArray<T> = Array<T>


    const number1 : GenericArray<number> = [1, 2 , 3];
    const strArry1 : GenericArray<string> = ["x", "y", "z"];

    const boolArr : Array<boolean> = [true, false, true];

    const users: GenericArray<{name:string, age:number}> = [
        {
            name: "hayder", 
            age : 30,
        },
        {
            name: "rakib", 
            age : 25,
        },
    ];


    type GenricTupole<X, Y> = [X, Y];
    const man1 : [number, string] = [12345, "hayder"]
    
    const man : GenricTupole<string, string> = ["x", "y"]

    type GenericsVar<T> = T;
    
    const name1:GenericsVar<number> = 123456;


    type User1 = {
        name:string,
        age: number
    }

    interface User2 {
        name:string,
        age: number  
    }

    const users1: GenericArray<User2> = [
        {
            name: "hayder", 
            age : 32,
        },
        {
            name: "rakib", 
            age : 25,
        },
    ];

    


}