var randomnum1=Math.floor(Math.random()*6)+1;
var randomimage1="D:/dice/images/download" + randomnum1+ ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);


var randomnum2=Math.floor(Math.random()*5)+1; 
var randomimage2="D:/dice/images/download"+randomnum2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);


var randomnum3=Math.floor(Math.random()*5)+1; 
var randomimage3="D:/dice/images/download"+randomnum3+".png";
var image3=document.querySelectorAll("img")[2];
image3.setAttribute("src",randomimage3);


var randomnum4=Math.floor(Math.random()*5)+1; 
var randomimage4="D:/dice/images/download"+randomnum4+".png";
var image3=document.querySelectorAll("img")[3];
image3.setAttribute("src",randomimage4);



if (randomnum1 > randomnum2 && randomnum1 > randomnum3 && randomnum1 > randomnum4 )
{
	document.querySelector("h1").innerHTML= "Player one wins!";

}
else if (randomnum2 > randomnum1 && randomnum2> randomnum3 && randomnum2> randomnum4)
{
    document.querySelector("h1").innerHTML="Player two wins!";

}
else if (randomnum3 > randomnum1 && randomnum3> randomnum2 && randomnum3> randomnum4)
{
    document.querySelector("h1").innerHTML="Player three wins!";

}
else if (randomnum4 > randomnum1 && randomnum4> randomnum2 && randomnum4> randomnum3)
{
    document.querySelector("h1").innerHTML="Player four wins!";

}


//function myFunction() {
  //alert("I am an alert box!");
//}