//Task 1:
// Write a JavaScript function that accepts a number as a parameter and checks whether the number is positive or not.

 var check =(a) =>{
if (a>0){
    console.log("Positive")
}
else{
   console.log("Negative") 
}

}
check(1)



// Task 2:
// Write a JavaScript function to find the largest number in an array given as the parameter. (Use arrow function).
var largest =(A) =>{
    let max=A[0]
for(let i=0;i<(A.length);i++){
if(A[i]>max){
    max=A[i];
}
}
console.log("maximum is "+max);
}

largest([1,9,3,20,8]);

// Task 3:
// Write a program to find the area of a cylinder using JavaScript objects (radius, height and the area function should be in the object). (Area of a Cylinder= pi*r^2*h)
const pi=22/7;
let areaCylinder={
    radius: 5,
    height: 2,
    area: calculateArea
}
function calculateArea(){
    return pi * this.radius * this.radius * this.height
}

console.log("The area of cylinder is ",areaCylinder.area())






// Task 4:
// Write a program to find the area of a square and a rectangle using JavaScript objects with a common area function. (Use this keyword). (Area of a Rectangle/Square = length * breadth)

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