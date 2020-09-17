
var x = 0;

function like() {

    x++;
    document.getElementById("like").innerHTML = x;
    return;
}

var y = 0;

function dislike() {
    y++;
    document.getElementById("dislike").innerHTML = y;
    return;
}


let button = document.querySelector("#bar");
let menu = document.querySelector(".main");
let menuStatus = false;

button.addEventListener("click", function menuToggle() {
    if (menuStatus == false) {
        menu.classList.add("main");
        menu.style.marginTop = "0px";
        menuStatus = true;
        console.log("hello world");
    } else if (menuStatus == true) {
        menu.classList.add("main");
        menu.style.marginTop = "300px";
        menuStatus = false;
    }
});
// //multiple button sections, please help me fix the bug at line 38
// const theParent = document.querySelector(".coments");
// theParent.addEventListener("click", iterate, false);

// function iterate(e) {
//     if(e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         alert("hello "+ clickedItem);
//     }
//     e.stopPropagation();
// }
function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // var session = "Morning";

    if(hour == 0){
        hour = 12;
    }
    if(hour > 24){
        hour = hour - 12;
        // session = "Evining"
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time  = hour + "h  " + minutes + "m  " + seconds + "s";
    document.querySelector(".clock").innerHTML = time;
    document.querySelector(".clock").context = time;

    setTimeout(showTime, 1000);
}
showTime();
