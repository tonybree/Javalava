"use strict";
var L8_GoldenerHerbst;
(function (L8_GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let line = 0.45;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * line;
        drawBackground();
        drawGras();
        drawSun({ x: 100, y: 50 });
        drawCloud({ x: 550, y: 100 }, { x: 175, y: 75 });
        drawMountains({ x: 0, y: horizon }, 80, 200, "darkgrey", "white");
        drawLeaf();
        drawTree(75, 380);
        drawTree(75, 440);
        drawTree(75, 500);
        drawSquirrel();
    }
    function drawBackground() {
        console.log("background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "orange");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawGras() {
        console.log("gras");
        crc2.save();
        crc2.fillStyle = "#65ae66";
        crc2.fillRect(0, 250, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }
    function drawSun(_position) {
        console.log("sun");
        let radius1 = 30;
        let radius2 = 100;
        let gradientSun = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientSun;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let cloudParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D();
        let gradientCloud = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientCloud;
        for (let drawn = 0; drawn < cloudParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradientMountain = crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);
        crc2.fillStyle = gradientMountain;
        crc2.fill();
        crc2.restore();
    }
    function drawLeaf() {
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * (-100);
            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = "#ad5810";
            crc2.beginPath();
            crc2.moveTo(50, 580);
            crc2.quadraticCurveTo(30, 570, 10, 580);
            crc2.moveTo(10, 580);
            crc2.quadraticCurveTo(30, 590, 50, 580);
            crc2.fill();
            crc2.restore();
        }
    }
    function drawTree(_x, _y) {
        //Tree 1
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#5b3120";
        crc2.fillRect(150, 500, 50, 600);
        crc2.fillStyle = "#345823";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y - 100);
        crc2.lineTo(_x + 200, _y);
        crc2.closePath();
        crc2.fill();
        /*Tree 2*/
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#5b3120";
        crc2.fillRect(150, 500, 50, 600);
        crc2.fillStyle = "#345823";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y - 100);
        crc2.lineTo(_x + 200, _y);
        crc2.closePath();
        crc2.fill();
        /*Tree 3*/
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#5b3120";
        crc2.fillRect(150, 500, 50, 600);
        crc2.fillStyle = "#345823";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y - 100);
        crc2.lineTo(_x + 200, _y);
        crc2.closePath();
        crc2.fill();
    }
    function drawSquirrel() {
        crc2.save();
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(320, 450, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        /*body*/
        crc2.beginPath();
        crc2.moveTo(320, 450);
        crc2.quadraticCurveTo(290, 500, 320, 500);
        crc2.moveTo(320, 500);
        crc2.quadraticCurveTo(350, 500, 320, 450);
        crc2.fill();
        /*feet*/
        crc2.beginPath();
        crc2.arc(310, 500, 5, 0, 2 * Math.PI);
        crc2.arc(330, 500, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        /*ears*/
        crc2.beginPath();
        crc2.arc(313, 445, 5, 0, 2 * Math.PI);
        crc2.arc(328, 445, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        /*tail*/
        crc2.beginPath();
        crc2.moveTo(330, 495);
        crc2.quadraticCurveTo(330, 460, 340, 450);
        crc2.moveTo(340, 450);
        crc2.quadraticCurveTo(370, 480, 330, 495);
        crc2.fill();
        crc2.restore();
    }
})(L8_GoldenerHerbst || (L8_GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map