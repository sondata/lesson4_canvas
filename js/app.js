'use strict';

var canvas = document.getElementById('canvas');

var cWidth  = screen.width;
var cHeight = screen.height;

canvas.width = cWidth;
canvas.height = cHeight;

var center = 85;
var reverse = false;

window.onresize = function(){
    cWidth  = screen.width;
    cHeight = screen.height;
    canvas.width = cWidth;
    canvas.height = cHeight;
    if ((center + 35) >= cWidth ) {
        center = cWidth - 35;
        reverse = !reverse;
    } else if ((center - 35) <= 0) {
        center = 85;
        reverse = !reverse;
    };

};

/*var strokeColor = '#000';
var fillColor = '#fff';
var startX = 0;
var startY = 0;*/

var ctx = canvas.getContext("2d");

function draw() {


    ctx.clearRect(0, 0, cWidth, cHeight);

    // head
    ctx.beginPath();
    ctx.arc((center - 10), 85, 50, 0, Math.PI*2, true);
    ctx.stroke();

    //body
    ctx.beginPath();
    ctx.moveTo((center - 10), 135);
    ctx.lineTo((center - 10), 250);
    ctx.stroke();

    //left hand
    ctx.beginPath();
    ctx.moveTo((center - 60), 125);
    ctx.lineTo((center - 10), 185);
    ctx.stroke();

    //left foot
    ctx.beginPath();
    ctx.moveTo((center - 10), 250);
    ctx.lineTo((center - 60), 325);
    ctx.stroke();

    //right hand
    ctx.beginPath();
    ctx.moveTo(center + 45, 125);
    ctx.lineTo(center - 10, 185);
    ctx.stroke();

    //right foot
    ctx.beginPath();
    ctx.moveTo(center - 10, 250);
    ctx.lineTo(center + 45, 325);
    ctx.stroke();

    if ((center + 35) >= cWidth || (center - 35) <= 0) {
        reverse = !reverse;
        canvas.className = "crash";
        setTimeout(function(){ canvas.className = ""; }, 1000);
    };


    if (reverse) {
        center--;    
    } else{
        center++;
    };

    window.requestAnimationFrame(draw);

};


(function(){
    window.requestAnimationFrame(draw);
})();
