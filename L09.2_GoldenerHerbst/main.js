"use strict";
var L09_GoldenerHerbst;
(function (L09_GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let background;
    let imgData;
    L09_GoldenerHerbst.golden = 0.62;
    L09_GoldenerHerbst.leaves = [];
    L09_GoldenerHerbst.flowers = [];
    L09_GoldenerHerbst.squirrels = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_GoldenerHerbst.crc2 = canvas.getContext("2d");
        L09_GoldenerHerbst.crc2.fillStyle = "white";
        L09_GoldenerHerbst.crc2.strokeStyle = "grey";
        L09_GoldenerHerbst.crc2.fillRect(0, 0, L09_GoldenerHerbst.crc2.canvas.width, L09_GoldenerHerbst.crc2.canvas.height);
        L09_GoldenerHerbst.horizon = L09_GoldenerHerbst.crc2.canvas.height * L09_GoldenerHerbst.golden;
        imgData = L09_GoldenerHerbst.crc2.getImageData(0, 0, canvas.width, canvas.height);
        drawBackground();
        drawSun(new L09_GoldenerHerbst.Vector(100, 50));
        let mountain1 = new L09_GoldenerHerbst.Mountain(0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(L09_GoldenerHerbst.crc2);
        let mountain2 = new L09_GoldenerHerbst.Mountain(0, 400, 100, 300, "grey", "grey");
        mountain2.draw(L09_GoldenerHerbst.crc2);
        let pine1 = new L09_GoldenerHerbst.Pine(-30, -50, .6, .9);
        pine1.draw(L09_GoldenerHerbst.crc2, L09_GoldenerHerbst.horizon);
        let pine2 = new L09_GoldenerHerbst.Pine(-50, -90, .5, .7);
        pine2.draw(L09_GoldenerHerbst.crc2, L09_GoldenerHerbst.horizon);
        drawSquirrel();
        createLeaves(10);
        drawFlower();
    }
    function createLeaves(_nLeaves) {
        let x = (0);
        let y = (100);
        let position = new L09_GoldenerHerbst.Vector(x, y);
        let velocity = new L09_GoldenerHerbst.Vector(x, y);
        for (let i = 0; i < Math.random() * 100; i++) {
            let leaf = new L09_GoldenerHerbst.Leaf(position, velocity);
            L09_GoldenerHerbst.leaves.push(leaf);
        }
    }
    function update() {
        console.log("x wurde das Bild schon gemalt!");
        L09_GoldenerHerbst.crc2.fillRect(0, 0, L09_GoldenerHerbst.crc2.canvas.width, L09_GoldenerHerbst.crc2.canvas.height);
        L09_GoldenerHerbst.crc2.putImageData(background, 0, 0);
        for (let leaf of L09_GoldenerHerbst.leaves) {
            leaf.move(1 / 50);
            leaf.draw();
        }
    }
    function drawBackground() {
        let gradient = L09_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, L09_GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_GoldenerHerbst.golden, "white");
        gradient.addColorStop(0.6, "darkorange");
        L09_GoldenerHerbst.crc2.fillStyle = gradient;
        L09_GoldenerHerbst.crc2.fillRect(0, 0, L09_GoldenerHerbst.crc2.canvas.width, L09_GoldenerHerbst.crc2.canvas.height);
        L09_GoldenerHerbst.crc2.fillStyle = "HSL(105, 70%, 30%)";
        L09_GoldenerHerbst.crc2.fillRect(0, 400, L09_GoldenerHerbst.crc2.canvas.width, 200);
    }
    function drawSun(_position) {
        let r1 = 25;
        let r2 = 80;
        let gradient = L09_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_GoldenerHerbst.crc2.save();
        L09_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L09_GoldenerHerbst.crc2.fillStyle = gradient;
        L09_GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_GoldenerHerbst.crc2.fill();
        L09_GoldenerHerbst.crc2.restore();
    }
    function generateRandomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
        return color;
    }
    function drawFlower() {
        for (let i = 0; i < 10; i++) {
            let flower = new L09_GoldenerHerbst.Flower(generateRandomColor());
            L09_GoldenerHerbst.flowers.push(flower);
            flower.draw(L09_GoldenerHerbst.crc2);
        }
    }
})(L09_GoldenerHerbst || (L09_GoldenerHerbst = {}));
//# sourceMappingURL=main.js.map