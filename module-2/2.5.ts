{
    // function generics

    const makeArray = <T>(param:T): T[] => {
       return [param];
    }

    const makeToupleArray =<T, Q> (params1:T, params2:Q): [T, Q]=>{
         return [params1, params2]
    }

    const result1 = makeToupleArray<string, number>("hayder", 20)
    console.log(result1)


    const makeObj = <T>(params:T) : T & {data:string} =>{
         const data:string = "hayder"

         return {
            ...params,
            data,
         }
    }

    const result2 = makeObj<{name:string, age:number}>({
        name:"Rakib", age:30
    })
    console.log(result2)




}