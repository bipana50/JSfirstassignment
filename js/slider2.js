var images = document.querySelectorAll(".container .wrapper img");
for(var i=0; i<images.length; i++){
    images[i].style.left= 200*i + "px";
}

var buttonLeft = document.createElement("button");
buttonLeft.innerHTML = "left";
document.body.appendChild(buttonLeft);
buttonLeft.classList.add("btn1");

var buttonRight = document.createElement("button");
buttonRight.innerHTML = "right";
document.body.appendChild(buttonRight);
buttonRight.classList.add("btn2");


var buttonLeft = document.querySelector(".btn1");
buttonLeft.addEventListener("click",  function(e){
   var wrapper = document.querySelector(".wrapper");
   var leftValue = wrapper.style.left;
   if(!leftValue){
       leftValue = "0px";
   }
   if(parseInt(leftValue) === 0){
    leftValue = images.length * (-200) +"px";
   }
   
      
   wrapper.style.left = parseInt(leftValue) + 200 + "px"; 


});


var buttonRight = document.querySelector(".btn2");
buttonRight.addEventListener("click",  function(e){
    var wrapper = document.querySelector(".wrapper");
    var leftValue = wrapper.style.left;
    if(!leftValue){
        leftValue = "0px";
    }
    if(parseInt(leftValue) === images.length * -200 + 200){
     leftValue = "200px";
    } 
    wrapper.style.left = parseInt(leftValue) - 200 + "px";

 });

