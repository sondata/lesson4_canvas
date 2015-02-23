/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        window.requestAnimationFrame(app.draw);
    },
    // Update DOM on a Received Event
    draw: function() {
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

        window.requestAnimationFrame(app.draw);
    }
};

app.initialize();