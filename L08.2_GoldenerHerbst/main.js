"use strict";
var L08_GoldenerHerbst;
(function (L08_GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let background;
    L08_GoldenerHerbst.golden = 0.62;
    L08_GoldenerHerbst.bees = [];
    L08_GoldenerHerbst.flowers = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L08_GoldenerHerbst.crc2 = canvas.getContext("2d");
        L08_GoldenerHerbst.crc2.fillStyle = "white";
        L08_GoldenerHerbst.crc2.strokeStyle = "grey";
        L08_GoldenerHerbst.crc2.fillRect(0, 0, L08_GoldenerHerbst.crc2.canvas.width, L08_GoldenerHerbst.crc2.canvas.height);
        L08_GoldenerHerbst.horizon = L08_GoldenerHerbst.crc2.canvas.height * L08_GoldenerHerbst.golden;
        drawBackground();
        drawSun(new L08_GoldenerHerbst.Vector(100, 50));
        let mountain1 = new L08_GoldenerHerbst.Mountain(0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(L08_GoldenerHerbst.crc2);
        let mountain2 = new L08_GoldenerHerbst.Mountain(0, 400, 100, 300, "grey", "grey");
        mountain2.draw(L08_GoldenerHerbst.crc2);
        let pine1 = new L08_GoldenerHerbst.Pine(-30, -50, .6, .9);
        pine1.draw(L08_GoldenerHerbst.crc2, L08_GoldenerHerbst.horizon);
        let pine2 = new L08_GoldenerHerbst.Pine(-50, -90, .5, .7);
        pine2.draw(L08_GoldenerHerbst.crc2, L08_GoldenerHerbst.horizon);
        let background = L08_GoldenerHerbst.crc2.getImageData(0, 0, L08_GoldenerHerbst.crc2.canvas.width, L08_GoldenerHerbst.crc2.canvas.height);
        createBlueFlower(5);
        createVioletFlower(5);
        createBees(10);
        window.setInterval(update, 40, background);
    }
    function createBees(_nBees) {
        let x = (0);
        let y = (100);
        let position = new L08_GoldenerHerbst.Vector(x, y);
        let velocity = new L08_GoldenerHerbst.Vector(x, y);
        for (let i = 0; i < Math.random() * 100; i++) {
            let bee = new L08_GoldenerHerbst.Bee(position, velocity);
            L08_GoldenerHerbst.bees.push(bee);
        }
    }
})(L08_GoldenerHerbst || (L08_GoldenerHerbst = {}));
/*function generateRandomColor(): string {
    let r: number = Math.floor(Math.random() * 255);
    let g: number = Math.floor(Math.random() * 255);
    let b: number = Math.floor(Math.random() * 255);
    "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
    return;
}*/
function createBlueFlower(_nBlueFlower) {
    for (let i = 0; i < _nBlueFlower; i++) {
        let blueFlower = new BlueFlower;
        flowers.push(blueFlower);
    }
}
function createVioletFlower(_nVioletFlower) {
    for (let i = 0; i < _nVioletFlower; i++) {
        let violetFlower = new VioletFlower;
        flowers.push(violetFlower);
    }
}
function drawBackground() {
    let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(golden, "white");
    gradient.addColorStop(0.6, "darkorange");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.fillStyle = "HSL(105, 70%, 30%)";
    crc2.fillRect(0, 400, crc2.canvas.width, 200);
}
function drawSun(_position) {
    let r1 = 25;
    let r2 = 80;
    let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
    gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
    gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;
    crc2.arc(0, 0, r2, 0, 2 * Math.PI);
    crc2.fill();
    crc2.restore();
}
//# sourceMappingURL=main.js.map