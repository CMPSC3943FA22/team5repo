function myFunction() {


    var y = document.getElementById("set");
     var x = document.getElementById("first");
      var z = document.getElementById("second");
      var j = document.getElementById("setbutton");
        var i = document.getElementById("home");

     x.style.display = "block";
     z.style.display = "block";
    if (x.style.display === "none" && z.style.display === "none" ) {


        z.style.display = "block";
         x.style.display = "block";
          j.style.display = "block";
        y.style.display = "none";
         i.style.display = "none";


    } 
    else{

        z.style.display = "none";
       x.style.display = "none";
        j.style.display = "none";
        y.style.display = "block";
        i.style.display = "block";
    }
}




function hidden() {

    var x = document.getElementById("set");

    var z = document.getElementById("home");

    x.style.display = "none";


    z.style.display = "none";



}


window.onload = hidden();



function hidemain() {
    var x = document.getElementById("set");
    var y = document.getElementById("news");
    var z = document.getElementById("mainframe");
    var i = document.getElementById("settings");
    var k = document.getElementById("home");

    x.style.display = "none";
    i.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    k.style.display = "block";

}

