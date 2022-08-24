//automatically take the data type
const Name = "shakib"; //type shakib
let Name1 = "shakib"; //type string
let obj = {
  //type object
  name: "shakib",
  roll: 12,
  isRegular: false,
};
let arr = [1, 2, 3, 4, 5]; //type number[]
let ar = ["a", "b", "c"]; //type string[]
let mix = [1, "a", 2, "b"]; //type (string | number)[]

//given data type
const Name2: string = "shakib";
let Num: number = 12;
let obj1: {
  name: string;
  roll: number;
  isRegular: boolean;
} = {
  name: "shakib",
  roll: 12,
  isRegular: false,
};
let obj2: {
  name: string;
  roll?: number;
  isRegular: boolean;
} = {
  name: "shakib",
  isRegular: false,
};
let arr1: number[] = [1, 2, 3, 4];
let ar1: string[] = ["a", "b", "c"];
let mix1: (string | number)[] = [1, "a", 2, "b"];
//tuple
let tup: [string, number] = ["shakib", 1]; //data type is equal to value
let tup1: [number, string] = [12, "shakib"];
//Enum
enum abc {
  "moniruzzaman",
  "shakib",
  "rakib",
}
console.log(abc);
console.log(abc[0]); // get value using index
console.log(abc["shakib"]); //get property using index
enum abc1 {
  a = "moniruzzaman",
  b = "shakib",
  c = "rakib",
}
console.log(abc1);
console.log(abc1.b); //get value calling by property name like object.
// function
function sum(a: number, b: number): number {
  return a + b;
}
const sum1 = function (a: number, b: number): number {
  return a + b;
};
const sum11 = (a: number, b: number): number => {
  return a + b;
};
// function signature
const sum2: (a: number, b: number) => number = function (a, b) {
  return a + b;
};
let sum3: (a: number, b: number) => number;
sum3 = function (a, b) {
  return a + b;
};
