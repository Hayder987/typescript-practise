{
    // interface generics

    interface Developer <X, Y = null > {
        name: string,
        age: number,
        computer:{
            brand:string,
            price: number
        }
        smartWatch : X,
        bike? : Y
    }

    type SmartWatch1 = {
        name: string,
        model: number,
        price : number,
    }

    const developer1 : Developer<SmartWatch1> = {
        name:"hayder",
        age : 30,
        computer:{
            brand: "smasung",
            price : 2585
        },
        smartWatch:{
            name:"apple",
            model:2565,
            price: 256
        }

    }

    interface SmartWatch2  {
        name: string,
        model: number,
        price : number,
        o2:boolean
    }


    const developer2 : Developer<SmartWatch2, {name:string, price:number}> = {
        name:"rakib",
        age : 25,
        computer:{
            brand: "LG",
            price : 2256
        },
        smartWatch:{
            name:"apple",
            model:256,
            price: 257,
            o2: true
        },
        bike:{
            name:"TVS",
            price: 2545,
        }

    }




}