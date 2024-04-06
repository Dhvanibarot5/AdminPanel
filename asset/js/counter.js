var finalValue1 = 6500;
var finalValue2 = 1204;
var finalValue3 = 2690;

var finalValue4 = 132;
var finalValue5 = 160;
var finalValue6 = 82;
var finalValue7 = 24;

var startValue = 0;
var time;
var x;
var x1;
var numString = "";
var numString1 = "";

var valueLength = finalValue1.toString().length;
var valueLength2 = finalValue2.toString().length;
var valueLength3 = finalValue3.toString().length;

var valueLength4 = finalValue4.toString().length;
var valueLength5 = finalValue5.toString().length;
var valueLength6 = finalValue6.toString().length;
var valueLength7 = finalValue7.toString().length;

//to increase speed, reduce the value of "i"
for (var i = 10; i < valueLength; i++) {
  numString += "1";
}
x = Number(numString);
function upValue1() {
  if (startValue <= finalValue1) {
    setTimeout(function () {
      document.getElementById("number_up1").innerText = startValue;
      if (x > 0) {
        startValue = startValue + x;
        time = 1;
      } else {
        startValue = startValue + 1;
        time = 2;
      }
      upValue1();
    }, time);
  } else {
    setTimeout(function () {
      document.getElementById("number_up1").innerText = finalValue1;
    }, time);
  }
}
function upValue2() {
  if (startValue <= finalValue2) {
    setTimeout(function () {
      document.getElementById("number_up2").innerText = startValue;
      if (x > 0) {
        startValue = startValue + x;
        time = 1;
      } else {
        startValue = startValue + 1;
        time = 5;
      }
      upValue2();
    }, time);
  } else {
    setTimeout(function () {
      document.getElementById("number_up2").innerText = finalValue2;
    }, time);
  }
}
function upValue3() {
  if (startValue <= finalValue3) {
    setTimeout(function () {
      document.getElementById("number_up3").innerText = startValue;
      if (x > 0) {
        startValue = startValue + x;
        time = 1;
      } else {
        startValue = startValue + 1;
        time = 5;
      }
      upValue3();
    }, time);
  } else {
    setTimeout(function () {
      document.getElementById("number_up3").innerText = finalValue3;
    }, time);
  }
}

for (var i = 50; i < valueLength4; i++) {
  numString1 += "1";
}
x1 = Number(numString1);

function upValue4() {
  if (startValue <= finalValue4) {
    setTimeout(function () {
      document.getElementById("number_up4").innerText = startValue;
      if (x1 > 0) {
        startValue = startValue + x1;
        time = 1;
      } else {
        startValue = startValue + 1;
        time = 5;
      }
      upValue4();
    }, time);
  } else {
    setTimeout(function () {
      document.getElementById("number_up4").innerText = finalValue4;
    }, time);
  }
}
function upValue5() {
  if (startValue <= finalValue5) {
    setTimeout(function () {
      document.getElementById("number_up5").innerText = startValue;
      if (x1 > 0) {
        startValue = startValue + x1;
        time = 1;
      } else {
        startValue = startValue + 1;
        time = 5;
      }
      upValue5();
    }, time);
  } else {
    setTimeout(function () {
      document.getElementById("number_up5").innerText = finalValue5;
    }, time);
  }
}
function upValue6() {
  if (startValue <= finalValue6) {
    setTimeout(function () {
      document.getElementById("number_up6").innerText = startValue;
      if (x1 > 0) {
        startValue = startValue + x1;
        time = 1;
      } else {
        startValue = startValue + 1;
        time = 5;
      }
      upValue6();
    }, time);
  } else {
    setTimeout(function () {
      document.getElementById("number_up6").innerText = finalValue6;
    }, time);
  }
}
function upValue7() {
  if (startValue <= finalValue7) {
    setTimeout(function () {
      document.getElementById("number_up7").innerText = startValue;
      if (x1 > 0) {
        startValue = startValue + x1;
        time = 1;
      } else {
        startValue = startValue + 1;
        time = 5;
      }
      upValue7();
    }, time);
  } else {
    setTimeout(function () {
      document.getElementById("number_up7").innerText = finalValue7;
    }, time);
  }
}

upValue1();
upValue2();
upValue3();

upValue4();
upValue5();
upValue6();
upValue7();
