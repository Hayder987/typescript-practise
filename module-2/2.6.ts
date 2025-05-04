{

// MAPPING variable

const numArr : number[] = [1 , 2, 6];

const strArr : string[] = numArr.map(item => item.toString())

console.log(strArr)

type AreaNum = {
    height: number,
    width: number
}

type height = AreaNum["height"]; // lookup type

// type AreaStr = {
//     [key in keyof AreaNum] : string;
// } 

type AreaStr<T> = {
    [key in keyof T] : T[key];
}

const area1 : AreaStr<{height:string, width:number}> = {
    height:"100",
    width:40
 } 







}