//click double-click

const BoxOne=document.querySelector('#box1');
function alertBtn(){
    alert("You clicked box1");
}
BoxOne.addEventListener("click",alertBtn)

const BoxTwo=document.querySelector('#box2');
function alertBtn1(){
    alert("You clicked box2");
}
BoxTwo.addEventListener("click",alertBtn1)

//mouse over
const BoxThree=document.querySelector("#box3");
function alertBtn3(){
    alert("you moved your mouse in Box 3");
}
BoxThree.addEventListener("mouseover",alertBtn3);
//mouse move

//mouse out
const BoxFour=document.querySelector("#box4");
function alertBtn4(){
    alert("you moved your mouse out of box 4");
}
BoxFour.addEventListener("mouseout",alertBtn4);

const BoxFive=document.querySelector("#box5");
function alertBtn5(){
    alert("you moved your mouse in Box 5");
}
BoxFive.addEventListener("mousemove",alertBtn5);