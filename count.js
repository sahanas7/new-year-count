 
    let datetime = new Date("jan 1, 2024 00:00:00").getTime();

 function displaytime() {
    let now = new Date().getTime();
     var distance = datetime - now;
     
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var min = zero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
var sec = zero(Math.floor((distance % (1000 * 60)) / 1000));
 

document.getElementById('days').innerHTML= days
document.getElementById('hours').innerHTML= hours
document.getElementById('mins').innerHTML= min
document.getElementById('secs').innerHTML= sec
 }
 function zero(num) {
    return num<10? "0"+num:num
    }

 setInterval(displaytime,1000)

