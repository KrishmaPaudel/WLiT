//DOM Manipulation
// Modifying elements

const title= document.querySelector("#heading");
console.log(title);

title.style.color= "red";
title.textContent= "things we learn"

const titles= document.querySelectorAll("#heading");
console.log(title);

titles[0].style.color= "red";
titles[0].textContent= "things we learn"

const items= document.querySelectorAll(".item-list");
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
    items[i].style.color='red';
}