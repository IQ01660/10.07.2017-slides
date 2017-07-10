var imagesArr = ["table.jpg","tele.jpg","sofa.jpg","cont.jpg"];
var overLay = document.querySelector(".overLay");
var appear = document.querySelector(".appear");
var leftB = document.querySelector(".left");
var rightB = document.querySelector(".right");

var newImg = document.createElement("img");
appear.appendChild(newImg);
newImg.setAttribute("style","width:100% ; height:100%");

function table() {
    overLay.setAttribute("style","width:100% ; height:100%");
    appear.setAttribute("style","width:400px ; height:320px ");
    leftB.setAttribute("style","width:30px ; height:30px ")
    rightB.setAttribute("style","width:30px ; height:30px ")
    // var newImg = document.createElement("img");
    newImg.setAttribute("src",imagesArr[0])
    newImg.setAttribute("style","width:100% ; height:100%")
    appear.appendChild(newImg);
    newImg.style.position="absolute"
    newImg.style.zIndex = 3;
}
function tele() {
    overLay.setAttribute("style","width:100% ; height:100%");
    appear.setAttribute("style","width:400px ; height:320px ")
    leftB.setAttribute("style","width:30px ; height:30px ")
    rightB.setAttribute("style","width:30px ; height:30px ")
    // var newImg = document.createElement("img");
    newImg.setAttribute("src",imagesArr[1])
    newImg.setAttribute("style","width:100% ; height:100%")
    appear.appendChild(newImg);
    newImg.style.position="absolute"
    newImg.style.zIndex = 3;
}
function sofa() {
    overLay.setAttribute("style","width:100% ; height:100%");
    appear.setAttribute("style","width:400px ; height:320px ")
    leftB.setAttribute("style","width:30px ; height:30px ")
    rightB.setAttribute("style","width:30px ; height:30px ")
    // var newImg = document.createElement("img");
    newImg.setAttribute("src",imagesArr[2])
    newImg.setAttribute("style","width:100% ; height:100%")
    appear.appendChild(newImg);
    newImg.style.position="absolute"
    newImg.style.zIndex = 3;
}
function cont() {
    overLay.setAttribute("style","width:100% ; height:100%");
    appear.setAttribute("style","width:400px ; height:320px ")
    leftB.setAttribute("style","width:30px ; height:30px ")
    rightB.setAttribute("style","width:30px ; height:30px ")
    // var newImg = document.createElement("img");
    newImg.setAttribute("src",imagesArr[3])
    newImg.setAttribute("style","width:100% ; height:100%")
    appear.appendChild(newImg);
    newImg.style.position="absolute"
    newImg.style.zIndex = 3;
}
function out() {
    overLay.setAttribute("style","width:0 ; height:0");
    appear.setAttribute("style","width:0 ; height:0 ");
    leftB.setAttribute("style","width:0 ; height:0 ")
    rightB.setAttribute("style","width:0 ; height:0 ")
}
var index = 0
function right() {
    index++;
    if (index>3) {
        index=0;
    }
    newImg.setAttribute("src",imagesArr[index]);
}
function left() {
    index--;
    if (index<0) {
        index=3;
    }
    newImg.setAttribute("src",imagesArr[index]);
}