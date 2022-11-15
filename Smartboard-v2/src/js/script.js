function myFunction() {

    var z = document.getElementById("news");
    var y = document.getElementById("set");

    y.style.display = "block";
    if (z.style.display === "none") {


        z.style.display = "block";
        y.style.display = "none";

    } else {

        z.style.display = "none";
        y.style.display = "block";
    }
}


function hidden() {

    var x = document.getElementById("set");
    var y = document.getElementById("mainframe");
    var z = document.getElementById("home");

    x.style.display = "none";

    y.style.display = "none";
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

