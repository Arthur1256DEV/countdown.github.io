//MECHENDO COM CONTADOR
var deadline = new Date("Jan 1, 2023 00:00:00").getTime();

var resetInterval = setInterval(function() {

var now = new Date().getTime();

var timer = deadline - now;

var days = Math.floor(timer / (1000 * 60 * 60 * 24));

var hours = Math.floor((timer %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));

var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((timer % (1000 * 60)) / 1000);

days = days < 10 ? "0" + days : days;
            
hours = hours < 10 ? "0" + hours : hours;

minutes = minutes < 10 ? "0" + minutes : minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

document.querySelector("#timer").innerHTML = days + " : " 
+ hours + " : " + minutes + " : " + seconds;

    if (t < 0) {
        clearInterval(resetInterval);
        document.querySelector("#timer").innerHTML = "EXPIRED";
    }
}, 1000);


