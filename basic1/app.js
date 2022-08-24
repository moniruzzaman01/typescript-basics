"use strict";
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
const Name2 = "shakib";
let Num = 12;
let obj1 = {
    name: "shakib",
    roll: 12,
    isRegular: false,
};
let obj2 = {
    name: "shakib",
    isRegular: false,
};
let arr1 = [1, 2, 3, 4];
let ar1 = ["a", "b", "c"];
let mix1 = [1, "a", 2, "b"];
//tuple
let tup = ["shakib", 1]; //data type is equal to value
let tup1 = [12, "shakib"];
//Enum
var abc;
(function (abc) {
    abc[abc["moniruzzaman"] = 0] = "moniruzzaman";
    abc[abc["shakib"] = 1] = "shakib";
    abc[abc["rakib"] = 2] = "rakib";
})(abc || (abc = {}));
console.log(abc);
console.log(abc[0]); // get value using index
console.log(abc["shakib"]); //get property using index
var abc1;
(function (abc1) {
    abc1["a"] = "moniruzzaman";
    abc1["b"] = "shakib";
    abc1["c"] = "rakib";
})(abc1 || (abc1 = {}));
console.log(abc1);
console.log(abc1.b); //get value calling by property name like object.
// function
function sum(a, b) {
    return a + b;
}
const sum1 = function (a, b) {
    return a + b;
};
const sum11 = (a, b) => {
    return a + b;
};
// function signature
const sum2 = function (a, b) {
    return a + b;
};
let sum3;
sum3 = function (a, b) {
    return a + b;
};
