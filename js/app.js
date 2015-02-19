'use strict';

var canvas = document.getElementById('canvas');

plot.width = screen.width;
plot.height = screen.height;

var strokeColor = '#000';
var fillColor = '#fff';
var startX = 0;
var startY = 0;

var ctx = plot.getContext("2d");

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
    
};




(function(){
    //drawLine();
})();
