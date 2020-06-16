function myFunction() {
    document.getElementById("demo").style.fontSize="50px";
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}


function plusOne() {
    
    var count = document.getElementById("count");
    number++;
    count.innerHTML = number;
}var number = 1;

function minusOne() {
    var count = document.getElementById("count");
    number--;
    count.innerHTML = number;
}var number = -1;

function myFunction2() {
    alert('I SAID DO NOT CLICK THIS');
}
function date() {
    var d = new Date("02.05.2020");
    document.getElementById("date").innerHTML = d;
}