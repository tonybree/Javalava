"use strict";
var GoldenerHerbst;
(function (GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    GoldenerHerbst.golden = 0.62;
    let moveables = [];
    let squirrels = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        GoldenerHerbst.crc2 = canvas.getContext("2d");
        GoldenerHerbst.crc2.fillStyle = "white";
        GoldenerHerbst.crc2.strokeStyle = "grey";
        GoldenerHerbst.crc2.fillRect(0, 0, GoldenerHerbst.crc2.canvas.width, GoldenerHerbst.crc2.canvas.height);
        GoldenerHerbst.golden = GoldenerHerbst.crc2.canvas.height * GoldenerHerbst.golden;
        let pine1 = new GoldenerHerbst.Tree(-30, -50, .6, .9);
        pine1.draw();
        let pine2 = new GoldenerHerbst.Tree(-50, -90, .5, .7);
        pine2.draw();
        console.log(moveables);
        let leafCount = 30;
        let leafColors = ["#eb6c00", "#f4da00", "#bd1800"];
        for (let i = 0; i < leafCount; i++) {
            let random = Math.floor(Math.random() * 4);
            let canvasRandomX = Math.random() * GoldenerHerbst.crc2.canvas.width;
            let canvasRandomY = Math.random() * GoldenerHerbst.crc2.canvas.height;
            let newLeaf = new GoldenerHerbst.Leaf(new GoldenerHerbst.Vector(canvasRandomX, canvasRandomY), leafColors[random], random);
            moveables.push(newLeaf);
        }
        let squirrelCount = 5;
        let squirrelColors = ["#824f2b", "#5e3e14", "#4a300f"];
        for (let i = 0; i < squirrelCount; i++) {
            let random = Math.floor(Math.random() * 3);
            let canvasRandomX = Math.random() * GoldenerHerbst.crc2.canvas.width;
            let canvasRandomY = Math.random() * GoldenerHerbst.crc2.canvas.height + 500;
            let newSquirrel = new GoldenerHerbst.Squirrel(new GoldenerHerbst.Vector(canvasRandomX, canvasRandomY), squirrelColors[random]);
            squirrels.push(newSquirrel);
        }
    }
    function drawBackground(_x, _y) {
        let gradient = GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkorange");
        GoldenerHerbst.crc2.fillStyle = gradient;
        GoldenerHerbst.crc2.fillRect(0, 0, GoldenerHerbst.crc2.canvas.width, GoldenerHerbst.crc2.canvas.height);
        GoldenerHerbst.crc2.fillStyle = "HSL(105, 70%, 30%)";
        GoldenerHerbst.crc2.fillRect(0, 400, GoldenerHerbst.crc2.canvas.width, 400);
    }
    function drawSun(_x, _y, _fillColor) {
        let r1 = 25;
        let r2 = 80;
        let gradient = GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        GoldenerHerbst.crc2.save();
        GoldenerHerbst.crc2.translate(100, 100);
        GoldenerHerbst.crc2.fillStyle = gradient;
        GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        GoldenerHerbst.crc2.fill();
        GoldenerHerbst.crc2.restore();
    }
    function drawMountain(_x, _y, _min, _max) {
        let stepMin = 30;
        let stepMax = 80;
        let x = 0;
        GoldenerHerbst.crc2.save();
        GoldenerHerbst.crc2.translate(_x, _y);
        GoldenerHerbst.crc2.beginPath();
        GoldenerHerbst.crc2.moveTo(0, 0);
        GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < GoldenerHerbst.crc2.canvas.width);
        GoldenerHerbst.crc2.lineTo(x, 0);
        GoldenerHerbst.crc2.closePath();
        let gradient = GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -stepMax);
        gradient.addColorStop(0, "lightgrey");
        gradient.addColorStop(0.9, "white");
        GoldenerHerbst.crc2.fillStyle = gradient;
        GoldenerHerbst.crc2.fill();
        GoldenerHerbst.crc2.restore();
    }
    function update() {
        drawBackground(0, 0);
        GoldenerHerbst.crc2.restore();
        GoldenerHerbst.crc2.save();
        drawSun(0, 300, "#f7fae1");
        GoldenerHerbst.crc2.restore();
        GoldenerHerbst.crc2.save();
        drawMountain(0, 400, 100, 300);
        GoldenerHerbst.crc2.restore();
        GoldenerHerbst.crc2.save();
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        squirrels.forEach(squirrel => {
            squirrel.draw();
        });
    }
    window.setInterval(update, 60);
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=Main.js.map