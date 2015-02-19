'use strict';

var canvas = document.getElementById('canvas');

canvas.width = screen.width;
canvas.height = screen.height;

var center = 85;

/*var strokeColor = '#000';
var fillColor = '#fff';
var startX = 0;
var startY = 0;*/

var ctx = canvas.getContext("2d");

function draw() {

    ctx.beginPath();
    ctx.arc((center - 10), 85,50,0,Math.PI*2,true); // Outer circle
    //ctx.moveTo(110,75);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo((center - 10), 125);
    ctx.lineTo((center - 10), 250); // Outer circle
    ctx.stroke();

    //left hand
    ctx.beginPath();
    ctx.moveTo((center - 60), 125);
    ctx.lineTo((center - 10), 185); // Outer circle
    ctx.stroke();

    //left foot
    ctx.beginPath();
    ctx.moveTo((center - 10), 250);
    ctx.lineTo((center - 60), 325); // Outer circle
    ctx.stroke();



    //right hand
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(75, 185); // Outer circle
    ctx.stroke();

    //right foot
    ctx.beginPath();
    ctx.moveTo(75, 250);
    ctx.lineTo(125, 325); // Outer circle
    ctx.stroke();

    center++;

    window.requestAnimationFrame(draw);

}

window.requestAnimationFrame(draw);



/*
function draw(shape) {

    if (shape == 'line') {
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(105,25);
        ctx.lineTo(25,105);
        ctx.stroke();  
    };
    if (shape == 'circle') {
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(105,25);
        ctx.lineTo(25,105);
        ctx.stroke(); 
    };
    if (shape == 'square') {
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(105,25);
        ctx.lineTo(25,105);
        ctx.stroke();  
    };
};
function drawCircle() {
    
};
function drawSquare() {
    
};*/




(function(){
    //drawLine();
})();
