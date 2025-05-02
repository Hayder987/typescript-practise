{
    // generics

    type GenericArray<T> = Array<T>


    const number1 : GenericArray<number> = [1, 2 , 3];
    const strArry1 : GenericArray<string> = ["x", "y", "z"];

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
    
    const man : GenricTupole<string, string> = ["x", "y"]




}