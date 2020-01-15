document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick=function() { calculateTip();};

 function calculateTip(){
var billAmt = document.getElementById("billAmt").value;
var serviceQuality = document.getElementById("serviceQuality").value;
var peopleAmt = document.getElementById("peopleAmt").value;



 if(billAmt===""  || serviceQuality===0){
return document.getElementById("alert").innerHTML="Please enter a value!";
}

if(isNaN(billAmt)  || isNaN(peopleAmt)){
document.getElementById("alert").innerHTML="Please enter a valid number!";
return;
}

 if(peopleAmt =="" || peopleAmt <=1 ){
   peopleAmt=1;

  document.getElementById("each").style.display="none";
}
else {
  document.getElementById("each").style.display="block";
}

var total= (billAmt*serviceQuality) / peopleAmt;
total=Math.round(total);
// total=total.toFixed(2);

 document.getElementById("totalTip").style.display="block";
 document.getElementById("tip").innerHTML=total;


}





















 //
