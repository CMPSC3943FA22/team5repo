

function on() {
     var i = document.getElementById("setbutton")
 var x=document.getElementById("first")
var y=document.getElementById("second")

  document.getElementById("overlay").style.display = "block";
  i.style.display="none";
 

    x.style.pointerEvents="none";
 y.style.pointerEvents="none";
}

function off() {
 var i = document.getElementById("setbutton")
 var x=document.getElementById("first")
var y=document.getElementById("second")
  document.getElementById("overlay").style.display = "none";
   i.style.display="block";

    x.style.pointerEvents="auto";
 y.style.pointerEvents="auto";

}


 rangeInput = document.getElementById('range');
        display = document.getElementsByClassName('display')[0];
        rangeInput.addEventListener("change", function() {
          display.style.filter = "brightness(" + rangeInput.value + "%)";
        });


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
function myFunction1() {


  document.getElementById("display").style.backgroundImage = "url('src/images/1.jpg')";
   document.getElementById("display").style.backgroundAttachment = "fixed";
    document.getElementById("display").style.backgroundRepeat = "no-repeat";
     document.getElementById("display").style.backgroundSize="cover";

 
}

function myFunction2() {


  document.getElementById("display").style.backgroundImage = "url('src/images/2.jpg')";
   document.getElementById("display").style.backgroundAttachment = "fixed";
    document.getElementById("display").style.backgroundRepeat = "no-repeat";
     document.getElementById("display").style.backgroundSize="cover";

 
}
function myFunction3() {


  document.getElementById("display").style.backgroundImage = "url('src/images/3.jpg')";
   document.getElementById("display").style.backgroundAttachment = "fixed";
    document.getElementById("display").style.backgroundRepeat = "no-repeat";
     document.getElementById("display").style.backgroundSize="cover";

 
}
function myFunction4() {


  document.getElementById("display").style.backgroundImage = "url('src/images/4.jpg')";
   document.getElementById("display").style.backgroundAttachment = "fixed";
    document.getElementById("display").style.backgroundRepeat = "no-repeat";
     document.getElementById("display").style.backgroundSize="cover";
     

 
}
function myFunction5() {


  document.getElementById("display").style.backgroundImage = "url('src/images/5.jpg')";
   document.getElementById("display").style.backgroundAttachment = "fixed";
    document.getElementById("display").style.backgroundRepeat = "no-repeat";
     document.getElementById("display").style.backgroundSize="cover";

 
}
function myFunction6() {


  document.getElementById("display").style.backgroundImage = "url('src/images/6.jpg')";
   document.getElementById("display").style.backgroundAttachment = "fixed";
    document.getElementById("display").style.backgroundRepeat = "no-repeat";
     document.getElementById("display").style.backgroundSize="cover";

 
}
