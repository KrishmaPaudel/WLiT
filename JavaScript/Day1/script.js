// let x=15;

// console.log(x);
// console.log(typeof x);
// console.log(typeof typeof x);

// let y=true;
// console.log(y);

// let a=null;
// console.log(a);
// // console.log(b);

// console.log(null== undefined)
// console.log(null=== undefined)

// let vs var vs const


//ternary operator
// let x=75;
// console.log(x>50?"Greater":"smaller");

let grade=90;
// if(grade>=90){
//     console.log("Grade A");
// }
// else if(grade>=80){
//     console.log("Grade B");
// }
// else if(grade>=70){
//     console.log("Grade C");
// }else{
//     console.log("Fail")
// }
// console.log(grade>=90 ?"grade A": grade>=80 ?"grade B":grade>=70 ?"grade C" : "fail")

// let x=2;
// switch(x){
//     case 1:
//         console.log("printed 1");
//         break;
        
//     case 2:
//         console.log("printed 2");
//         break;
//     case 3:
//         console.log("printed 3");
//         break;
//     default:
//         console.log("Number not found");
//         break;

// }

// for (let x=0; x<8; x++)
// {
//     console.log(x);
// }


// var check =(a) =>{
// if (a>0){
//     console.log("Positive")
// }
// else{
//    console.log("Negative") 
// }

// }
// check(1)

// var largest =(A) =>{
//     let max=A[0]
// for(let i=0;i<(A.length);i++){
// if(A[i]>max){
//     max=A[i];
// }
// }
// console.log("maximum is "+max);
// }

// largest([1,9,3,20,8]);

// //or
// var arr=[1,2,3,5,9,4]
// console.log(Math.max(...arr)); // ... is spread operator


// let person={ //this is an object
//     name: "Alice",
//     address: "wonderland",
//     isStudent: true
// };
// console.log(person)
// person.age= 22;
// console.log(person) // we can add the var in class later on also 

// person.address= "inWonderland" // we can manipulate the value
// console.log(person)


function calculateArea()
{
    return this.length* this.breadth
}
let rec={
    length: 10,
    breadth: 5,
    area: calculateArea
};
const squ={
    length:6,
    breadth:6,
    area:calculateArea
}

console.log("area of rec:"+ rec.area())
console.log("area of square:"+ squ.area())
