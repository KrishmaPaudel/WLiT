//DOM events

//keyboard events
// const boxone= document.querySelector("#box1")
// // console.log(boxone)

// function alertBtn(){
//     alert("you pressed an key in box1")
// }
// boxone.addEventListener("keydown",boxone)

const textInput =document.getElementsByClassName("textInput")[0]; //arraying will take the most recent text you typed and entered, since the texts will be stored as a list as in a stack every time you press enter
textInput.addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        console.log("Your entered: ",textInput.value);
    }
})