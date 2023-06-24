var second=0;
var hour=0;
var minute=0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
            hour = d.getHours()*30+Math.round(minute/12);
            minute = d.getMinutes()*6;
            second = d.getSeconds()* 6;
            document.getElementById("second-hand").style.transform="rotate("+second+"deg)";
            document.getElementById("hours-hand").style.transform="rotate("+hour+"deg)";
            document.getElementById("minute-hand").style.transform="rotate("+minute+"deg)";
    }, 1000
);