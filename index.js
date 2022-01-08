var num1;
var num2;

document.querySelector(".img1").addEventListener("click",function(){
     num1=Math.floor(6*Math.random()+1);
     num2=Math.floor(6*Math.random()+1);
if(num1>num2){
    document.querySelector(".verdict").innerHTML="you win";
    }
    if(num1<num2){
    document.querySelector(".verdict").innerHTML="you lose";
    }
    if(num1===num2){
    document.querySelector(".verdict").innerHTML="IT's a tie";
    }
    if(num1){
        imgChange(num1);
       
    }
    if(num2){
        imgChange2(num1);
        
    }
    function imgChange(){
        document.querySelector(".img1").src="./images/dice"+num1+".png";
    }
       
       
    function imgChange2(){
        document.querySelector(".img2").src="./images/dice"+num2+".png";
    }


})
