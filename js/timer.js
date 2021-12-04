let time; //기준 시간
let min = "";
let sec = "";

time = 180;

let x = setInterval(function() {
    min = parseInt(time/60);
    sec = leadingZeros(time%60, 2);

    document.getElementById("timer").innerHTML = min + ":" + sec;
    time--;

    if (time < 0) {
      min_change();
      time = 180;
    }
}, 1000) ;

function timerReset() {
    time = 180;
};

function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
  
    if (n.length < digits) {
      for (var i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
  };