running=true;
document.body.onclick = function() {
    window.running = !window.running;
}
var alpha = 0;
var steps = 0;
function step() {
    if (running) {

        steps++;
        alpha = steps * Math.PI / 128;
        if (alpha > Math.PI * 2) {
            steps = 0;
        }
        paint();
    }

    setTimeout(step, 80);
}

setTimeout(step, 80);

function paint() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    //Center
    var width = c.width - 400;
    var height = 600 * 0.6;
    var x0 = width / 2;
    var y0 = height / 2;

    //Radius
    var r = height / 2.5;

    //Coordinates of the Point
    x = r * Math.cos(alpha);
    y = -r * Math.sin(alpha);

    //Unit-Circle
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';

    ctx.beginPath();
    ctx.arc(x0, y0, r, 0, 2 * Math.PI);
    ctx.stroke();

    //value in the axis
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0 + x, y0);
    ctx.strokeStyle = 'rgb(0,0,255)';

    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0, y0 + y);
    ctx.strokeStyle = 'rgb(0,200,0)';
    ctx.stroke();

    //From the axis to the point
    /*ctx.lineWidth = 3;
     ctx.beginPath();
     ctx.moveTo(x0 + x, y0);
     ctx.lineTo(x0 + x, y0 + y);
     ctx.strokeStyle = 'rgb(0,200,0)';
     ctx.stroke();*/

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0 + x, y0);
    ctx.strokeStyle = 'rgb(0,0,255)';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0 + x, y0 + y);
    ctx.stroke();

    //Alpha
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ff0000';
    ctx.arc(x0, y0, r, 2 * Math.PI - alpha, Math.PI * 2);
    ctx.stroke();

    //Coordinate-System
    ctx.font = "14px Arial";
    ctx.beginPath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0,0,255,0.9)';

    ctx.moveTo(0, y0);
    ctx.lineTo(width, y0);
    ctx.stroke();
    ctx.fillText("x", width - 10, y0 - 10);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,200,0,0.9)';

    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, height);
    ctx.stroke();
    ctx.fillText("y", x0 + 10, 10);

    ctx.font = "17px Arial";
    ctx.fillStyle = "#ff0000"
    ctx.fillText("??/2", x0, y0 - r - 5);
    ctx.fillText("??", x0 - r - 15, y0);
    ctx.fillText("3??/2", x0, y0 + r + 15);
    ctx.fillText("0", x0 + r + 10, y0 - 10);
    ctx.fillText("2??", x0 + r + 10, y0 + 18);

    x01 = x0 + r * 2.5;

    //Second Coordinate System
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,200,0,0.9)';

    ctx.moveTo(x01, 0);
    ctx.lineTo(x01, height);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.moveTo(x01, y0);
    ctx.lineTo(x01 + width, y0);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,0,0.7)';

    ctx.moveTo(x01, y0 + r * -Math.sin(0));
    //Sine
    for ( i = 0; i < steps; i++) {
        ctx.lineTo(x01 + i, y0 - r * Math.sin(i * Math.PI / 128));
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.moveTo(x01, y0);
    ctx.lineTo(x01 + steps, y0);
    ctx.stroke();

    //From The Point to current sin value
    ctx.setLineDash([5, 2]);
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,200,0)';
    ctx.moveTo(0, y + y0);
    ctx.lineTo(c.width, y0 - r * Math.sin(steps * Math.PI / 128));
    ctx.stroke();
    ctx.setLineDash([1, 0]);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,200,0)';
    ctx.moveTo(x01 + steps, y0);
    ctx.lineTo(x01 + steps, y0 - r * Math.sin(steps * Math.PI / 128));
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#000000"
    ctx.fillText("1", x01 - 15, y0 - r - 5);
    ctx.fillText("-1", x01 - 15, y0 + r + 15);

    ctx.font = "12px Arial";

    ctx.fillText("??/2", x01 + 64, y0 + 15);
    ctx.fillText("??", x01 + 128, y0 + 15);
    ctx.fillText("3??/2", x01 + 192, y0 + 15);
    ctx.fillText("2??", x01 + 256, y0 + 15);

    //Third Coordinate System
    y01 = y0 + r * 1.7;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,255,0.9)';

    ctx.moveTo(0, y01);
    ctx.lineTo(width, y01);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';

    ctx.moveTo(x0, y01);
    ctx.lineTo(x0, y01 + 2 * r);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.moveTo(x0 + r * Math.cos(0), y01);

    //Cosine
    for ( i = 0; i < steps; i++) {
        ctx.lineTo(x0 + r * Math.cos(i * Math.PI / 128), y01 + i);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(0,0,255)';

    ctx.moveTo(x0, y01 + steps);
    ctx.lineTo(x0 + r * Math.cos(steps * Math.PI / 128), y01 + steps)
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.moveTo(x0, y01);
    ctx.lineTo(x0, y01 + steps);
    ctx.stroke();

    //From The Point to current sin value
    ctx.setLineDash([5, 2]);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,0,200)';
    ctx.moveTo(x + x0, 0);
    ctx.lineTo(x0 + r * Math.cos(steps * Math.PI / 128), c.height)
    ctx.stroke();
    ctx.setLineDash([1, 0]);

    //The Point in the Circle
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.strokeFill = 'rgb(0,0,0)'
    ctx.beginPath();
    ctx.arc(x + x0, y + y0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();

    //The Point in Cosine
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.strokeFill = 'rgb(0,0,0)'
    ctx.beginPath();
    ctx.arc(x0 + r * Math.cos(steps * Math.PI / 128), y01 + steps, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();

    //The Point in Sine
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.strokeFill = 'rgb(0,0,0)'
    ctx.beginPath();
    ctx.arc(x01 + steps, y0 - r * Math.sin(steps * Math.PI / 128), 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#000000"
    ctx.fillText("-1", x0 - r, y01 - 15);
    ctx.fillText("1", x0 + r, y01 - 15);

    ctx.font = "12px Arial";

    ctx.fillText("??/2", x0 - 20, y01 + 64);
    ctx.fillText("??", x0 - 20, y01 + 128);
    ctx.fillText("3??/2", x0 - 20, y01 + 192);
    ctx.fillText("2??", x0 - 20, y01 + 256);

    //Update Label
    var l = document.getElementById("alpha");
    var lx = document.getElementById("x");
    var ly = document.getElementById("y");

    x = Math.round(x / r * 100) / 100;
    y = -Math.round(y / r * 100) / 100;
    alpha = Math.round(alpha * 1000) / 1000;

    l.innerHTML = "&#945;=" + alpha;
    lx.innerHTML = "<br> x=cos(&#945;)=" + (x);
    ly.innerHTML = "<br><br> y=sin(&#945;)=" + (y);

    // plot sine
    x0 = 600;
    y0 = 30;
}